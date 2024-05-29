import React, { Component } from 'react'
import { Group, Rect, Text, Line } from 'react-konva'
import Equation from './Equation.js'

class Steps extends Component {
  constructor(props) {
    super(props);
    window.Steps = this

    this.visible = false
    if (App.sampleId === 8) this.visible = true
    if (this.props.solveSteps.length > 0) this.visible = true
  }

  componentDidMount() {
  }

  render() {
    return (
      <Group
        x={ this.props.x }
        y={ this.props.y }
        visible={ this.visible && Canvas.state.clickedEquationId === this.props.equationId }
      >
        <Rect
          x={ 0 }
          y={ 0 }
          width={ 300 }
          height={ 40 * (this.props.solveSteps.length + 1) }
          fill={ 'white' }
        />
        {this.props.solveSteps.map((step, i) => {
          const stepHeight = 40
          return (
            <Equation
              key={ `steps-equation-${i}` }
              id={ -1 }
              x={ 10 }
              y={ stepHeight * i + 10 }
              width={ 300 }
              height={ 40 }
              latex={ step.newEquation.latex() }
              fill={ App.highlightColor }
            />
          );
        })}
      </Group>
    );
  }
}

export default Steps