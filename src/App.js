import React, { Component } from 'react'
import './App.css'
import Canvas from './Canvas.js'

class App extends Component {
  constructor(props) {
    super(props)
    window.app = this
    window.App = this

    // TEMP FIX 2024-01-07
    this.fix = true

    const num = 9
    this.sampleIds = Array.from({length: num}, (_, i) => i+1)
    this.sampleId = parseInt(window.location.href.split('?id=')[1])
    if (isNaN(this.sampleId)) this.sampleId = 1
    this.fileId = this.sampleId.toString().padStart(2, '0')
    this.baseURL = window.location.origin

    this.threshold = 0.5
    if (this.sampleId === 6) this.threshold = 0.4
    if (this.sampleId === 7) this.threshold = 0.3
    if (this.sampleId === 8) this.threshold = 0.2
    if (this.sampleId === 10) this.threshold = 0.2
    this.domain = 'https://raw.githubusercontent.com/ucalgary-ilab/augmented-math/main'

    this.dir = 'sample'

    this.test = false
    if (this.test) {
      this.testId = 1
    }
    if (window.location.href.includes('test')) {
      this.test = true
    } else {
      this.test = false
    }

    if (window.location.href.includes('localhost')) {
      this.domain = 'http://localhost:4000'
    }
    this.size = 1280
    this.canvasWidth = this.size * 0.86
    this.canvasHeight = this.size * 1.12

    this.paperSize = { x: 1284, y: 1541 } // Target: 1156 x 1541
    if (this.sampleId === 2) this.paperSize = { x: 1284, y: 1750 } // Target: 1240 x 1653
    if (this.sampleId === 3) this.paperSize = { x: 1284, y: 1750 } // Target: 1240 x 1653
    if (this.sampleId === 4) this.paperSize = { x: 1284, y: 1541 } // Target: 1156 x 1541
    if (this.sampleId === 5) this.paperSize = { x: 1284, y: 1541 } // Target: 1156 x 1541
    if (this.sampleId === 6) this.paperSize = { x: 1284, y: 1541 } // Target: 1156 x 1541
    if (this.sampleId === 7) this.paperSize = { x: 1284, y: 1541 } // Target: 1156 x 1541
    if (this.sampleId === 8) this.paperSize = { x: 1284, y: 1651 } // Target: 1238 x 1651
    if (this.sampleId === 9) this.paperSize = { x: 1284, y: 1651 } // Target: 1238 x 1651
    if (this.sampleId === 10) this.paperSize = { x: 1284, y: 1750 } // Target: 1240 x 1653

    this.ratio = {
      x: 1 * this.canvasWidth / this.paperSize.x,
      y: 1 * this.canvasHeight / this.paperSize.y
    }

    // 1156 x 1541
    // 1284 x 1541
    this.dragging = false
    this.initDrawing = true
    this.state = {
      selectMode: true,
      distance: 0,
      mouse2D: { x: 0, y: 0 },
      mouse: { x: 0, y: 0 },
      raycaster: new THREE.Raycaster(),
    }
    this.strokeColor = '#002f2b'
    this.fillColor = '#004842'
    this.fillColorAlpha = 'rgba(0, 28, 26, 0.3)'
    this.fillColorBackground = '#b2baba'
    this.highlightColor = '#ee00ab'
    this.highlightColorAlpha = 'rgba(238, 0, 171, 0.3)'
    this.highlightColorBackground = '#fff0fb'

    this.strokeWidth = 8
    this.canvasRef = React.createRef()

    // this.state.selectMode = false

    this.imageVisible = true
    this.paperColor = '#f6f6f6'
    if (window.location.href.includes('8thwall')) {
      this.imageVisible = false
      this.paperColor = '#DCD9C9'
      XR8.XrController.configure({ imageTargets: [`sample-${this.fileId}`] })
    }
  }

  componentDidMount() {
    this.sceneEl = document.querySelector('a-scene')
    // this.sceneEl.renderer = new THREE.WebGLRenderer({ alpha: true })

    const interval = setInterval(() => {
      let el = document.querySelector('#drawing-plane')
      let mesh = el.object3D.children[0]
      if (!mesh) return
      this.init()
      clearInterval(interval)
    }, 10)
  }

  init() {
    console.log('init')
    let el = document.querySelector('#drawing-plane')
    let mesh = el.object3D.children[0]
    let konvaEl = document.querySelector('.konvajs-content canvas')
    // konvaEl.width = konvaEl.height = this.size
    let texture = new THREE.CanvasTexture(konvaEl)
    let material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1,
      alphaTest: 0.1,
    })
    mesh.material = material
    this.mesh = mesh
    el.sceneEl.addEventListener('mousedown', this.mouseDown.bind(this))
    el.sceneEl.addEventListener('mousemove', this.mouseMove.bind(this))
    el.sceneEl.addEventListener('mouseup', this.mouseUp.bind(this))
    el.sceneEl.addEventListener('touchstart', this.touchStart.bind(this))
    el.sceneEl.addEventListener('touchmove', this.touchMove.bind(this))
    el.sceneEl.addEventListener('touchend', this.touchEnd.bind(this))

    AFRAME.components['drawing-plane'].Component.prototype.tick = this.tick.bind(this)
  }

  mouseDown(event) {
    this.dragging = true
  }

  mouseMove(event) {
    let mouse2D = { x: event.clientX, y: event.clientY }
    this.setState({ mouse2D: mouse2D })
  }

  mouseUp(event) {
    this.dragging = false
    this.initDrawing = true
    this.canvasRef.current.mouseUp(this.state.mouse)
  }

  touchStart(event) {
    this.dragging = true
    this.setState({ mouse2D: { x: 0, y: 0 } })
  }

  touchMove(event) {
    let mouse2D = { x: event.touches[0].clientX, y: event.touches[0].clientY }
    this.setState({ mouse2D: mouse2D })
  }

  touchEnd(event) {
    this.dragging = false
    this.initDrawing = true
    this.canvasRef.current.mouseUp()
  }

  tick() {
    this.mesh.material.map.needsUpdate = true
    const screenPositionX = (this.state.mouse2D.x / window.innerWidth) * 2 - 1
    const screenPositionY = (this.state.mouse2D.y / window.innerHeight) * 2 - 1
    const screenPosition = new THREE.Vector2(screenPositionX, -screenPositionY)

    let camera = document.getElementById('camera')
    if (!camera) return false
    let threeCamera = camera.getObject3D('camera')
    this.state.raycaster.setFromCamera(screenPosition, threeCamera)
    const intersects = this.state.raycaster.intersectObject(this.mesh, true)
    if (intersects.length > 0) {
      const intersect = intersects[0]
      let point = intersect.point
      let mouse = {
        x: this.canvasWidth * intersect.uv.x,
        y: this.canvasHeight * (1 - intersect.uv.y),
      }
      this.setState({ distance: intersect.distance, mouse: mouse })
      if (this.dragging) {
        if (this.initDrawing) {
          this.canvasRef.current.mouseDown(mouse)
          this.initDrawing = false
          console.log(this.initDrawing)
        } else {
          this.canvasRef.current.mouseDrag(mouse)
        }
      } else {
        this.canvasRef.current.mouseMove(mouse)
      }
    }
  }

  changeSample(sampleId) {
     window.location.href = `${this.baseURL}/augmented-math/?id=${sampleId}`
  }

  render() {
    this.imageURL = `${this.domain}/public/sample/sample-${this.fileId}.jpg`

    // TEMP FIX 2024-01-07
    this.imageURL = `https://cdn.glitch.global/a4b31ac2-a374-491d-9e88-74315ec15e53/sample-${this.fileId}.jpg?v=1704663901352`

    if (this.testId) {
      this.imageURL = `${this.domain}/public/test/test/test-${this.testId}/test-${this.testId}-${this.fileId}.jpg`
    }

    return (
      <>
        <div id='buttons'>
          { this.sampleIds.map((sampleId, i) => {
            return (
              <button key={ `button-${i}` } onClick={ this.changeSample.bind(this, sampleId) }>
                { sampleId }
              </button>
            )
          }) }
          <button
            id='select'
            onClick={() =>
              this.setState({ selectMode: !this.state.selectMode })
            }
          >{`Select Mode: ${this.state.selectMode}`}</button>
        </div>
        <Canvas ref={this.canvasRef} />
        <img
          id='paper'
          src={ this.imageURL }
          crossOrigin='anonymous'
          style={{ display: 'none' }}
        />
        { this.imageVisible &&
          <a-plane
            drawing-plane
            id="drawing-plane"
            class="cantap"
            position="0 4 9"
            width="0.86"
            height="1.12"
            color="#ccc"
          ></a-plane>
        }
        { !this.imageVisible &&
          <xrextras-named-image-target name={ `sample-${this.fileId}` }>
            <a-plane
              drawing-plane
              id="drawing-plane"
              class="cantap"
              width="0.8"
              height="1"
            ></a-plane>
          </xrextras-named-image-target>
        }
      </>
    )
  }
}

export default App
