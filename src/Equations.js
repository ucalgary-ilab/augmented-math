import React, { Component } from 'react'
import { Group, Rect } from 'react-konva'
import stringSimilarity from 'string-similarity'
import mathsteps from 'mathsteps'

import Equation from './Equation.js'
import Steps from './Steps.js'
import Summation from './Summation.js'

class Equations extends Component {
  constructor(props) {
    super(props)
    window.Equations = this
    this.state = {
      equations: [],
    }
    window.mathsteps = mathsteps

  }

  componentDidMount() {
    this.init()
  }

  async fetchData(url) {
    try {
      const response = await fetch(url)
      if (url.includes('json')) {
        return await response.json()
      } else {
        return await response.text()
      }
    } catch (error) {
      console.error(error);
    }
  }

  async init() {
    const threshold = App.threshold
    let url = `${App.domain}/public/sample/math-${App.fileId}.json`
    if (App.testId) {
      url = `${App.domain}/public/test/test/test-${App.testId}/math-${App.testId}-${App.fileId}.json`
    }

    // TEMP FIX 2024-01-07
    url = `https://worried-pickled-jam.glitch.me/math-${App.fileId}.json`

    let equations = await this.fetchData(url)
    window.mathocr = equations

    let url2 = `${App.domain}/public/sample/mathpix-${App.fileId}.md`

    if (App.testId) {
      url2 = `${App.domain}/public/test/test/test-${App.testId}/mathpix-${App.testId}-${App.fileId}.md`
    }

    // TEMP FIX 2024-01-07
    url2 = `https://worried-pickled-jam.glitch.me/mathpix-${App.fileId}.md`

    let mathpix = await this.fetchData(url2)
    window.mathpix = mathpix

    equations = equations.filter(e => e.score > threshold)
    equations = equations.map((equation) => {
      equation.bbox = equation.bbox.map((item) => {
        return [item[0] * App.ratio.x, item[1] * App.ratio.y]
      })
      equation.x = equation.bbox[0][0]
      equation.y = equation.bbox[0][1]
      equation.width = equation.bbox[2][0] - equation.x
      equation.height = equation.bbox[2][1] - equation.y
      return equation
    })

    let latexArray = this.extractEquations(mathpix)
    // console.log(_.clone(latexArray))

    let items = []
    for (let eq of mathocr) {
      let box = eq.bbox
      let bbox = { minX: box[0][0], maxX: box[2][0], minY: box[0][1], maxY: box[2][1] }
      let raw = ''
      for (let textAnnotation of ocr.textAnnotations) {
        let description = textAnnotation.description
        let vertices = textAnnotation.boundingPoly.vertices
        let bb = { minX: vertices[0].x, maxX: vertices[2].x, minY: vertices[0].y, maxY: vertices[2].y }
        const offset = 5
        if ((bbox.minX - offset <= bb.minX && bb.maxX <= bbox.maxX + offset) && (bbox.minY - offset <= bb.minY && bb.maxY <= bbox.maxY + offset)) {
          raw += description
        } else {
        }
      }
      let text = this.simpleConversion(raw)
      items.push({ raw: raw, text: text, score: eq.score })
    }
    // console.log(items)
    items = items.filter(item => item.score > threshold)

    items = items.map((item) => {
      let [latex, i] = this.closestLatex(item, latexArray)
      item.latex = latex
      if (App.sampleId === 2) {
        _.pullAt(latexArray, [i])
      }
      return item
    });
    console.log(items)

    const scores = items.map(item => item.score)
    for (let i = 0; i < equations.length; i++) {
      let equation = equations[i]
      let id = _.indexOf(scores, equation.score)
      if (items[id]) {
        equation.latex = items[id].latex
        equation.text = items[id].text
        equation.raw = items[id].raw
      }
      equation = this.getStepByStep(equation)
      const equationRef = React.createRef()
      Canvas.equationRefs.push(equationRef)
      equation.stepsRef = React.createRef()
      equation.summationRef = React.createRef()
      equations[i] = equation
    }
    equations = equations.filter(e => e.latex)
    console.log(equations)
    this.setState({ equations: equations })
  }

  getStepByStep(equation) {
    let latex = equation.latex
    if (!latex) return equation
    latex = latex.replace(/\{/g, '')
    latex = latex.replace(/\}/g, '')
    equation.solveSteps = mathsteps.solveEquation(latex)
    return equation
  }

  simpleConversion(text) {
    text = text.replace(/√/g, "\\sqrt");
    text = text.replace(/²/g, "^{2}");
    text = text.replace(/³/g, "^{3}");
    text = text.replace(/sin/g, "\\sin");
    text = text.replace(/···/g, "\\cdots");
    text = text.replace(/≤/g, "\\leqslant");
    text = text.replace(/Σ/g, "\\sum_");
    text = text.replace(/ai/g, "\\sum_{i=1}^{n} a_{i}");
    return text
  }

  closestLatex(item, latexArray) {
    const scoreThreshold = 0;
    let bestMatch = null;
    let bestScore = 0;
    let bestIndex = -1
    latexArray.forEach((latex, i) => {
      let score = this.compareStrings(item.text, latex);
      // if (item.text === 'f(a+h)-f(a)/h') console.log(score, latex)
      if (score > bestScore && score >= scoreThreshold) {
        bestScore = score;
        bestMatch = latex;
        bestIndex = i
      }
    });
    return [bestMatch, bestIndex];
  }

  compareStrings(a, b) {
    return stringSimilarity.compareTwoStrings(a, b)
  }

  extractEquations(text) {
    // $...$ or $$...$$
    text = text.replace(/\&/g, '')
    const regexs = [
     /\$\$\n([\s\S]*?)\n\$\$/g,
     /\$(.*?)\$/g,
    ]
    const equations = [];
    let match;
    for (let regex of regexs) {
      while ((match = regex.exec(text)) !== null) {
        equations.push(match[1]);
      }
    }
    return equations;
  }

  render() {
    return (
      <>
        { this.state.equations.map((equation, i) => {
          if (equation.score < App.threshold) return <></>

          return (
            <Group key={i}>
              {/* Each Equation */}
              <Equation
                key={ `equation-${i}` }
                ref={ Canvas.equationRefs[i] }
                id={ i }
                x={ equation.x }
                y={ equation.y }
                width={ equation.width }
                height={ equation.height }
                latex={ equation.latex }
              />

              <Steps
                equationId={ i }
                ref={ equation.stepsRef }
                x={ equation.x + equation.width + 10 }
                y={ equation.y - 20 }
                solveSteps={ equation.solveSteps }
              />

              <Summation
                equationId={ i }
                ref={ equation.summationRef }
                x={ equation.x + equation.width + 10 }
                y={ equation.y }
                latex={ equation.latex }
              />
            </Group>
          )
        })}
      </>
    )
  }
}

export default Equations