import React, { Component } from 'react'
import { Group } from 'react-konva'
import Equation from './Equation.js'

class Summation extends Component {
  constructor(props) {
    super(props);
    window.Summation = this
    this.state = {
      latex: ''
    }
    this.equationRef = React.createRef()
    this.visible = this.props.latex.includes('\\sum')
  }

  componentDidMount() {
  }

  update() {
    if (!this.visible) return
    let currentSymbols = Canvas.state.currentSymbols
    currentSymbols = Canvas.extractTag(currentSymbols)
    let base = this.props.latex.split(' ')[1]
    let n = parseInt(currentSymbols['1D45B'])
    if (base === 'i') n = parseInt(currentSymbols['32-30'])
    const latex = Array.from({length: n}, (_, i) => i+1).map((i) => {
      return base.replace(/i/g, i)
    }).join(' + ')
    this.setState({ latex: latex })
    this.equationRef.current.init()
  }

  render() {
    return (
      <Group
        x={ this.props.x }
        y={ this.props.y }
        visible={ this.visible }
      >
        <Equation
          id={ -1 }
          ref={ this.equationRef }
          x={ 10 }
          y={ 10 }
          width={ 300 }
          height={ 40 }
          latex={ this.state.latex }
          fill={ App.highlightColor }
        />
      </Group>
    );
  }
}

export default Summation