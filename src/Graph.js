import React, { Component } from 'react'
import { Line, Text } from 'react-konva'
import texMathParser from 'tex-math-parser'

class Graph extends Component {
  constructor(props) {
    super(props)
    window.Graph = this
    this.state = {
      points: [],
      equation: null,
    }
    window.texMathParser = texMathParser

    const figureId = this.props.figureId
    const figure = Figures.state.figures[figureId]
    this.origin = figure.origin
    this.xAxis = figure.xAxis
    this.yAxis = figure.yAxis
    this.originalSegments = figure.originalSegments
    this.originalPaths = figure.originalPaths

    const equationId = this.props.equationId
    if (equationId) {
      const equation = Equations.state.equations[equationId]
      this.latex = equation.latex
    }

    this.state.ratio = { x: 26, y: 28 }
    if (App.sampleId === 1) {
      if (this.props.figureId === 8) this.state.ratio = { x: 37, y: 37 }
      if (this.props.figureId === 9) this.state.ratio = { x: 37, y: 37 }
    }
    if (App.sampleId === 4) {
      if (this.props.figureId === 2) this.state.ratio = { x: 65, y: 34 }
      if (this.props.figureId === 3) this.state.ratio = { x: 32, y: 16 }
      if (this.props.figureId === 4) this.state.ratio = { x: 32, y: 1.6 }
    }
    if (App.sampleId === 6) {
      this.state.ratio = { x: 38, y: 38 }
    }

    this.state.ratio.x *= App.ratio.x
    this.state.ratio.y *= App.ratio.y
  }

  componentDidMount() {
  }

  update(equation) {
    equation = equation.replace(/f\(x\)/g, 'y')
    equation = equation.replace(/g\(x\)/g, 'y')
    equation = equation.replace(/h\(x\)/g, 'y')
    equation = equation.replace(/P\(x\)/g, 'y')

    if (App.sampleId === 2) {
      this.updateCircle(equation)
    } else {
      this.updateGraph(equation)
    }
  }

  updateGraph(equation) {
    const solveFor = equation.split('=')[0].trim()
    try {
      let points = []
      for (let x = -10; x < 10; x += 0.05) {
        let answer = texMathParser.evaluateTex(equation, { x: x });
        let y = answer.evaluated
        if (isNaN(y)) y = y.re

        if (solveFor === 'x') {
          points.push({ x: y, y: x })
        } else {
          points.push({ x: x, y: y })
        }
      }
      this.setState({ points: points })
    } catch (err) {
      console.error(err)
    }
  }

  updateCircle(equation) {
    const currentSymbols = Canvas.state.currentSymbols
    const asciiSymbols = {}
    for (let tag of Object.keys(currentSymbols)) {
      const ascii = Canvas.convertAscii(tag)
      asciiSymbols[ascii] = currentSymbols[tag]
    }
    let h = asciiSymbols['h'] || 0
    let k = asciiSymbols['k'] || 0
    let r = asciiSymbols['r'] || 0

    let latex = this.latex
    if (!latex.includes('(x-h)^{2}+(y-k)^{2}')) {
      h = asciiSymbols['2'] || 2
      k = -asciiSymbols['3'] || -3
      r = asciiSymbols['5'] || 5
    }
    const equation1 = 'y = \\sqrt{r^2 - (x - h)^2} + k'
    const equation2 = 'y = -\\sqrt{r^2 - (x - h)^2} + k'

    try {
      let points = []
      for (let x = -10; x <= 10; x += 0.05) {
        let answer = texMathParser.evaluateTex(equation1, { x: x, r: r, h: h, k: k });
        let y = answer.evaluated
        if (isNaN(y) && h-r-0.1 <= x && h+r > x) {
          y = y.re
        }
        points.push({ x: x, y: y })
      }
      for (let x = 10; x >= -10; x -= 0.05) {
        let answer = texMathParser.evaluateTex(equation2, { x: x, r: r, h: h, k: k });
        let y = answer.evaluated
        if (isNaN(y) && h-r-0.1 <= x && h+r > x) {
          y = y.re
        }
        points.push({ x: x, y: y })
      }
      this.setState({ points: points })
    } catch (err) {
      console.error(err)
    }
  }

  onDragStart(event) {
    const target = event.target
    this.originPos = App.state.mouse
    this.originSymbols = _.clone(Canvas.state.currentSymbols)
  }

  onDragMove(event) {
    const target = event.target
    target.x(0)
    target.y(0)
    let pos = App.state.mouse
    let delta = { x: pos.x - this.originPos.x, y: pos.y - this.originPos.y }
    // TODO
    let a = this.originSymbols['33']
    let b = this.originSymbols['31']
    let hash = {}
    if (!isNaN(a)) {
      hash['33'] = a - delta.x / this.state.ratio.x
    }
    if (!isNaN(b)) {
      hash['31'] = b - delta.y / this.state.ratio.y
    }
    let round = 1
    Canvas.updateValue(hash, round)
  }

  onDragEnd(event) {
  }

  convert(points) {
    let offset = this.state.ratio.y * 2.5
    if (App.sampleId === 2) offset = 150
    if (App.sampleId === 4) offset = 50
    let linePoints = []
    for (let point of points) {
      let x = point.x * this.state.ratio.x + this.origin.x
      let y = point.y * -this.state.ratio.y + this.origin.y
      if (isNaN(x) || isNaN(y)) continue
      if (x < this.xAxis[0] - offset || this.xAxis[2] + offset < x) continue
      if (y < this.yAxis[1] - offset || this.yAxis[3] + offset < y) continue
      linePoints.push(x, y)
    }
    return linePoints
  }

  render() {
    return (
      <Line
        x={ 0 }
        y={ 0 }
        points={ this.convert(this.state.points) }
        stroke={ App.strokeColor }
        strokeWidth={ 4 }
        draggable
        onDragStart={this.onDragStart.bind(this) }
        onDragMove={this.onDragMove.bind(this) }
        onDragEnd={this.onDragEnd.bind(this) }
        visible={ this.props.visible === false ? false : true }
      />
    )
  }
}

export default Graph