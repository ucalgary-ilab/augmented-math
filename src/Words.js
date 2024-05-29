import React, { Component } from 'react'
import { Group, Rect, Text } from 'react-konva'
import _ from 'lodash'
import Variable from './Variable.js'

class Words extends Component {
  constructor(props) {
    super(props)
    window.Words = this
    this.state = {
      textAnnotations: [],
      currentId: -1,
    }
  }

  componentDidMount() {
    let url = `${App.domain}/public/sample/ocr-${App.fileId}.json`

    if (App.testId) {
      url = `${App.domain}/public/test/test/test-${App.testId}/ocr-${App.testId}-${App.fileId}.json`
    }

    // TEMP FIX 2024-01-07
    url = `https://worried-pickled-jam.glitch.me/ocr-${App.fileId}.json`

    this.fetchData(url)
  }

  async fetchData(url) {
    try {
      const response = await fetch(url)
      const jsonData = await response.json()
      let ocr = jsonData
      if (App.testId) {
        ocr = { textAnnotations: ocr }
      }

      console.log(ocr)
      window.ocr = ocr
      const rawtext = ocr.textAnnotations[0].description
      const text = rawtext.replace(/(\r\n|\n|\r)/gm, " ")
      let textAnnotations = ocr.textAnnotations
      textAnnotations.shift()
      textAnnotations = textAnnotations.map((textAnnotation) => {
        textAnnotation.boundingPoly.vertices = textAnnotation.boundingPoly.vertices.map((vertex) => {
          return { x: vertex.x * App.ratio.x, y: vertex.y * App.ratio.y }
        })
        return textAnnotation
      })
      this.setState({ textAnnotations: textAnnotations })
    } catch (error) {
      console.log(error);
    }
  }

  onMouseDown(i) {
    console.log(this.state.textAnnotations[i])
    let word = this.state.textAnnotations[i].description
    let symbols = Canvas.state.currentSymbols
    let words = Object.keys(symbols)
    if (words.includes(word)) {
      delete symbols[word]
    } else {
      let num = Number(word)
      let defaultValue = isNaN(num) ? 0 : num
      symbols[word] = defaultValue
    }
    Canvas.setState({ symbols: symbols })
  }

  onMouseEnter(i) {
    this.setState({ currentId: i })
  }

  onMouseLeave(i) {
    this.setState({ currentId: -1 })
  }

  render() {
    let currentSymbols = Canvas.state.currentSymbols
    let asciiSymbols = {}
    for (let tag of Object.keys(currentSymbols)) {
      const ascii = Canvas.convertAscii(tag)
      asciiSymbols[ascii] = currentSymbols[tag]
    }
    return (
      <Group visible={ false }>
        <Text
          text={ `Selected Variables: ${ JSON.stringify(asciiSymbols) }` }
          x={ 50 }
          y={ 50 }
          fontSize={ 20 }
          fill={ App.highlightColor }
        />
        { this.state.textAnnotations.map((textAnnotation, i) => {
          let word = textAnnotation.description
          let offset = 5
          let vertices = textAnnotation.boundingPoly.vertices
          let x = vertices[0].x - offset/2
          let y = vertices[0].y - offset/2
          let width = vertices[2].x - vertices[0].x + offset
          let height = vertices[2].y - vertices[0].y + offset
          let color = 'rgba(0, 0, 0, 0.05)'
          if (Object.keys(currentSymbols).includes(word)) color = App.highlightColorAlpha
          if (this.state.currentId === i) color = App.highlightColorAlpha

          if (App.state.selectMode) {
            return (
              <Rect
                key={ `word-bbox-${i}` }
                x={ x }
                y={ y }
                width={ width }
                height={ height }
                fill={ color }
                onMouseDown={ this.onMouseDown.bind(this, i) }
                onMouseEnter={ this.onMouseEnter.bind(this, i) }
                onMouseLeave={ this.onMouseLeave.bind(this, i) }
              />
            )
          } else if (Object.keys(currentSymbols).includes(word)) {
            return (
              <Variable
                key={ `word-variable-${i}` }
                x={ x }
                y={ y }
                width={ width }
                height={ height }
                word={ word }
                value={ currentSymbols[word] }
              />
            )
          }
        })}
      </Group>
    )
  }
}

export default Words