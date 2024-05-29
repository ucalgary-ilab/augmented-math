import React, { Component } from 'react'
import { Group, Rect, Path, Line, Circle } from 'react-konva'
import svgson from 'svgson'
import svgPathBbox from 'svg-path-bbox'
import parseSvg from 'parse-svg-path'
import serializeSvg from 'serialize-svg-path'
import scaleSvg from 'scale-svg-path'

import Graph from './Graph.js'

class Figures extends Component {
  constructor(props) {
    super(props)
    window.Figures = this

    let isVisible = false
    if (App.test) {
      isVisible = true
    }

    this.state = {
      highlightId: -1,
      figures: [],
      extractedLines: [],
      xGraphVisible: isVisible,
      yGraphVisible: isVisible,
    }

    this.axisVisible = isVisible
    this.debugVisible = isVisible
  }

  componentDidMount() {
    this.processLine()
    this.processContour()
  }

  async fetchData(url) {
    try {
      const response = await fetch(url)
      return response.text()
    } catch (error) {
      console.error(error);
    }
  }

  async processLine() {
    let url = `${App.domain}/public/sample/figure-line-${App.fileId}.svg`

    if (App.testId) {
      url = `${App.domain}/public/test/test/test-${App.testId}/figure-line-${App.testId}-${App.fileId}.svg`
    }

    // TEMP FIX 2024-01-07
    url = `https://cdn.glitch.global/a4b31ac2-a374-491d-9e88-74315ec15e53/figure-line-${App.fileId}.svg?v=1704663838411`

    let svgText = await this.fetchData(url)
    let svgJson = svgson.parseSync(svgText)
    let extractedLines = svgJson.children
    extractedLines = extractedLines.filter((line) => line.attributes.d)
    for (let i = 0; i < extractedLines.length; i++) {
      let extractedLine = extractedLines[i]
      let pathData = extractedLine.attributes.d
      pathData = serializeSvg(scaleSvg(parseSvg(pathData), App.ratio.x, App.ratio.y))
      extractedLine.attributes.d = pathData
      let bbox = svgPathBbox(extractedLine.attributes.d)
      extractedLine.bbox = bbox
      extractedLine.visible = false
      extractedLines[i] = extractedLine
    }
    this.setState({ extractedLines: extractedLines })
  }

  async processContour() {
    let url = `${App.domain}/public/sample/figure-contour-${App.fileId}.svg`

    if (App.testId) {
      url = `${App.domain}/public/test/test/test-${App.testId}/figure-contour-${App.testId}-${App.fileId}.svg`
    }

    // TEMP FIX 2024-01-07
    url = `https://cdn.glitch.global/a4b31ac2-a374-491d-9e88-74315ec15e53/figure-contour-${App.fileId}.svg?v=1704663838411`

    let svgText = await this.fetchData(url)
    let svgJson = svgson.parseSync(svgText)
    let contours = svgJson.children
    contours = contours.filter((contour) => contour.attributes.d)
    let figures = []
    for (let i = 0; i < contours.length; i++) {
      let path = contours[i]
      let pathData = path.attributes.d
      pathData = serializeSvg(scaleSvg(parseSvg(pathData), App.ratio.x, App.ratio.y))
      path.attributes.d = pathData
      let bbox = svgPathBbox(path.attributes.d)
      let width = bbox[2] - bbox[0]
      let height = bbox[3] - bbox[1]
      if (width < 100 || height < 100) continue
      if (width > 1000 && height > 1000) continue
      let figure = { bbox: bbox }
      figure = this.getAxis(figure)
      if (figure) {
        figures.push(figure)
        const xGraphRef = React.createRef()
        const yGraphRef = React.createRef()
        Canvas.xGraphRefs.push(xGraphRef)
        Canvas.yGraphRefs.push(yGraphRef)
      }
      // break
    }
    this.setState({ figures: figures })
  }

  getAxis(figure) {
    let extractedLines = this.state.extractedLines
    let currentLines = extractedLines.filter((line) => {
      return (line.bbox[0] > figure.bbox[0]
           && line.bbox[1] > figure.bbox[1]
           && line.bbox[2] < figure.bbox[2]
           && line.bbox[3] < figure.bbox[3])
    })
    // currentLines.map((line) => line.visible = true )
    let horizontal = []
    let vertical = []
    let originalPaths = []
    let threshold = 5 // Important to get correct axis (5-10)
    // if (App.sampleId === 1) threshold = 10 // for sine curve
    for (let line of currentLines) {
      let bbox = line.bbox
      const diffX = Math.abs(bbox[2] - bbox[0])
      const diffY = Math.abs(bbox[3] - bbox[1])
      const distance = Math.sqrt(diffX + diffY)
      if (distance < 5) continue
      if (diffY < threshold) {
        horizontal.push(bbox)
      } else if (diffX < threshold) {
        vertical.push(bbox)
      } else {
        originalPaths.push(line)
      }
    }
    let xAxis = this.getAxisPoints(horizontal, 'x')
    let yAxis = this.getAxisPoints(vertical, 'y')
    let originalSegments = this.getSegments(originalPaths)
    if (xAxis && yAxis) {
      figure.xAxis = xAxis
      figure.yAxis = yAxis
      figure.origin = { x: yAxis[0], y: xAxis[1] }
      figure.originalPaths = originalPaths
      figure.originalSegments = originalSegments
      return figure
    } else {
      return null
    }
  }

  getAxisPoints(bboxes, axis='x') {
    let xs = _.flatten(bboxes.map(bbox => [bbox[0], bbox[2]]))
    let ys = _.flatten(bboxes.map(bbox => [bbox[1], bbox[3]]))
    let minX = _.min(xs)
    let maxX = _.max(xs)
    let minY = _.min(ys)
    let maxY = _.max(ys)
    let midX = (minX + maxX) / 2
    let midY = (minY + maxY) / 2
    if (isNaN(minX) || isNaN(maxX) || isNaN(minY) || isNaN(maxY)) return null
    if (axis === 'x') {
      return [minX, midY, maxX, midY]
    } else {
      return [midX, minY, midX, maxY]
    }
  }

  getSegments(originalPaths) {
    let originalSegments = []
    for (let graph of originalPaths) {
      const path = graph.attributes.d
      // let pathData = pathParse(path).getSegments()
      // segments.push(pathData.segments)
      const pathSegments = parseSvg(path)
      originalSegments.push(pathSegments)
    }
    originalSegments = _.flatten(originalSegments)
    return originalSegments
  }

  onMouseDown(i) {
    if (!App.state.selectMode) return
    Canvas.addGraph({ clickedFigureId: i })
  }

  onMouseEnter(i) {
    console.log(i)
    if (!App.state.selectMode) return
    this.setState({ highlightId: i })
  }

  onMouseLeave(i) {
    if (!App.state.selectMode) return
    this.setState({ highlightId: -1 })
  }

  render() {
    return (
      <>
        { this.state.figures.map((figure, i) => {
          let stroke = 'rgba(0, 0, 0, 0)'
          let fill = 'rgba(0, 0, 0, 0)'
          if (this.state.highlightId === i) {
            stroke = App.strokeColor
            fill = App.fillColorAlpha
          }
          if (Canvas.state.clickedFigureId === i) {
            stroke = App.highlightColor
            fill = App.highlightColorAlpha
          }
          return (
            <Group key={ `figure-${i}` }>
              <Rect
                key={ `bounding-box-${i}` }
                x={ figure.bbox[0] }
                y={ figure.bbox[1] }
                width={ figure.bbox[2] - figure.bbox[0] }
                height={ figure.bbox[3] - figure.bbox[1] }
                strokeWidth={ 3 }
                stroke={ stroke }
                fill={ fill }
                onMouseDown={ this.onMouseDown.bind(this, i) }
                onMouseEnter={ this.onMouseEnter.bind(this, i) }
                onMouseLeave={ this.onMouseLeave.bind(this, i) }
              />
              <Graph
                key={ `figure-${i}-x` }
                ref={ Canvas.xGraphRefs[i] }
                figureId={ i }
                latex={ 'x' }
                visible={ this.state.xGraphVisible }
              />
              <Graph
                ref={ Canvas.yGraphRefs[i] }
                key={ `figure-${i}-y` }
                figureId={ i }
                latex={ 'y' }
                visible={ this.state.yGraphVisible }
              />

              {/* x-axis */}
              <Line
                key={ `x-axis-${i}` }
                x={ 0 }
                y={ 0 }
                points={ figure.xAxis }
                strokeWidth={ 8 }
                stroke={ 'red' }
                visible={ this.axisVisible }
              />
              {/* y-axis */}
              <Line
                key={ `y-axis-${i}` }
                x={ 0 }
                y={ 0 }
                points={ figure.yAxis }
                strokeWidth={ 8 }
                stroke={ 'red' }
                visible={ this.axisVisible }
              />
              {/* origin */}
              <Circle
                key={ `origin-${i}` }
                x={ figure.origin.x }
                y={ figure.origin.y }
                radius={ 10 }
                fill={ 'red' }
                visible={ this.axisVisible }
              />

              {/* segments for debugging */}
              { figure.originalSegments.map((originalSegment, j) => {
                return (
                  <Circle
                    key={ `original-segment-${i}-${j}` }
                    x={ originalSegment[1] }
                    y={ originalSegment[2] }
                    radius={ 3 }
                    fill={ 'red' }
                    visible={ this.debugVisible }
                  />
                )
              })}

              {/* graph path for debugging */}
              { figure.originalPaths.map((path, j) => {
                return (
                  <Path
                    key={ `original-path-${i}-${j}` }
                    data={ path.attributes.d }
                    strokeWidth={ 8 }
                    stroke={ 'green' }
                    visible={ this.debugVisible }
                  />
                )
              })}
            </Group>
          )
        })}

        {/* figure line path for debugging */}
        { this.state.extractedLines.map((extractedLine, i) => {
          return (
            <Group key={ `extracted-line-${i}` }>
              <Path
                key={ `extracted-line-path-${i}` }
                data={ extractedLine.attributes.d }
                strokeWidth={ 3 }
                stroke={ 'blue' }
                visible={ this.debugVisible }
              />
              <Rect
                key={ `extracted-line-bbox-${i}` }
                x={ extractedLine.bbox[0] }
                y={ extractedLine.bbox[1] }
                width={ extractedLine.bbox[2] - extractedLine.bbox[0] }
                height={ extractedLine.bbox[3] - extractedLine.bbox[1] }
                stroke={ 'purple' }
                visible={ this.debugVisible }
              />
            </Group>
          )
        })}
      </>
    )
  }
}

export default Figures