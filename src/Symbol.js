import React, { Component } from 'react'
import { Group, Path, Rect, Text } from 'react-konva'
import svgPathBbox from 'svg-path-bbox'

class Symbol extends Component {
  constructor(props) {
    super(props)
    // window.Symbol = this
    this.state = {
      highlight: false,
    }
  }

  componentDidMount() {
    if (this.props.bbox.x > 200000) {
      console.log(this)
      console.log(this.props.bbox)
    }
  }

  onMouseDown() {
    if (this.props.id.includes('mo')) return
    // const tag = this.props.tag
    const tag = this.props.id
    const currentSymbols = Canvas.state.currentSymbols
    const ascii = Canvas.convertAscii(tag)
    const num = Number(ascii)
    if (Object.keys(currentSymbols).includes(tag)) {
      // delete symbols[tag]
    } else {
      currentSymbols[tag] = isNaN(num) ? 0 : num
    }
    Canvas.setState({ currentSymbols: currentSymbols })
    // this.setState({ highlight: true })
  }

  onMouseEnter() {
    console.log(this.props.id)
    if (this.props.id.includes('mo')) return
    this.setState({ highlight: true })
  }

  onMouseLeave() {
    this.setState({ highlight: false })
  }

  onDragStart(event) {
    if (this.props.id.includes('mo')) return
    // let tag = this.props.tag
    let tag = this.props.id
    let currentSymbols = Canvas.state.currentSymbols
    let ascii = Canvas.convertAscii(tag)
    console.log(tag, ascii)
    let num = Number(ascii)
    if (Object.keys(currentSymbols).includes(tag)) {
      // delete symbols[tag]
    } else {
      currentSymbols[tag] = isNaN(num) ? 0 : num
    }
    Canvas.setState({ currentSymbols: currentSymbols })
    // this.setState({ highlight: true })

    const pos = App.state.mouse
    this.originValue = currentSymbols[tag]
    this.originX = this.props.center.x
    this.originY = this.props.center.y
    Slider.setState({ arrowVisible: true })
    if (ascii === 'x') {
      Figures.setState({ xGraphVisible: true })
    }
    if (ascii === 'y') {
      Figures.setState({ yGraphVisible: true })
    }
  }

  onDragMove(event) {
    if (this.props.id.includes('mo')) return
    const target = event.target
    target.x(this.props.bbox.x)
    target.y(this.props.bbox.y)
    const pos = App.state.mouse
    Slider.setState({ currentX: pos.x, currentY: this.originY })

    let dx = pos.x - this.originX
    dx = dx / 10
    // console.log(pos, dx)

    let newSymbols = {}
    // newSymbols[this.props.tag] = this.originValue + dx
    newSymbols[this.props.id] = this.originValue + dx
    // let round = this.props.word === '²' ? 0 : 1
    let round = 1
    Canvas.updateValue(newSymbols, round)
  }

  onDragEnd(event) {
    Slider.setState({ arrowVisible: false })
    Figures.setState({ xGraphVisible: false, yGraphVisible: false })
  }

  render() {
    let fill = 'rgba(0, 0, 0, 0)'
    // if (Object.keys(Canvas.state.currentSymbols).includes(this.props.tag)) fill = App.highlightColorAlpha
    if (Object.keys(Canvas.state.currentSymbols).includes(this.props.id)) fill = App.highlightColorAlpha
    if (this.state.highlight) fill = App.highlightColorAlpha

    return (
      <Group key={ this.props.id}>
        {/* Text for current value */}
        {/*{ Canvas.state.currentSymbols[this.props.tag] !== undefined &&*/}
        { Canvas.state.currentSymbols[this.props.id] !== undefined &&
          <Text
            text={ Canvas.state.currentSymbols[this.props.id] }
            x={ this.props.center.x }
            y={ this.props.center.y }
            fontSize={ 20 }
            fill={ '#ee00ab' }
            width={ 100 }
            height={ 30 }
            offsetX={ 100/2 }
            offsetY={ 40 }
            align='center'
            verticalAlign='middle'
          />
        }
        {/* SVG path for each symbol */}
        <Path
          data={ this.props.pathData}
          fill={ this.props.fill }
        />
        {/* Bounding box for each symbol */}
        { this.props.bbox.height < 500 &&
          // Todo: Bug of svgPathBbox for sampleId = 9, "i". Just disable
          <Rect
            x={ this.props.bbox.x }
            y={ this.props.bbox.y }
            width={ this.props.bbox.width }
            height={ this.props.bbox.height }
            fill={ fill }
            draggable
            onDragStart={ this.onDragStart.bind(this)}
            onDragMove={ this.onDragMove.bind(this) }
            onDragEnd={ this.onDragEnd.bind(this) }
            onMouseDown={ this.onMouseDown.bind(this) }
            onMouseEnter={ this.onMouseEnter.bind(this) }
            onMouseLeave={ this.onMouseLeave.bind(this) }
          />
        }
      </Group>
    )
  }
}

export default Symbol