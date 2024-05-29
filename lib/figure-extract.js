import fs from 'fs'
import ImageTracer from  'imagetracerjs'
import jpeg from 'jpeg-js'

const num = 10
const sampleIds = Array.from({length: num}, (_, i) => i+1)

for (let sampleId of sampleIds) {
  const fileId = sampleId.toString().padStart(2, '0')
  const file = `public/sample/figure-${fileId}.jpg`
  const out = `public/sample/figure-contour-${fileId}.svg`

  const image = fs.readFileSync(file)
  const pixels = jpeg.decode(image)
  const imageData = { width: pixels.width, height: pixels.height, data: pixels.data }
  const options = { scale: 1 }
  const svg = ImageTracer.imagedataToSVG(imageData, options)

  fs.writeFileSync(out, svg)
  console.log(out + ' was saved')
}