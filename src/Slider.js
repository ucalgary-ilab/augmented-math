import React, { Component } from 'react'
import { Text } from 'react-konva'

class Slider extends Component {
  constructor(props) {
    super(props)
    window.Slider = this
    this.state = {
      arrowVisible: false,
      currentX: -10,
      currentY: -10,
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <Text
          x={ this.state.currentX }
          y={ this.state.currentY }
          text={ '↔' }
          fontSize={ 40 }
          fill={ '#ee00ab' }
          width={ 100 }
          height={ 30 }
          offsetX={ 100/2 }
          offsetY={ -20 }
          align='center'
          verticalAlign='middle'
          visible={ this.state.arrowVisible }
        />
      </>
    )
  }
}

export default Slider