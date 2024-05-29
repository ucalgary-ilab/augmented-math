import fs from 'fs'
import ImageTracer from  'imagetracerjs'
import jpeg from 'jpeg-js'

const tid = 14
const num = 10
const testIds = Array.from({length: num}, (_, i) => i+1)

for (let testId of testIds) {
  const fileId = testId.toString().padStart(2, '0')
  const file = `public/test/test/test-${tid}/figure-${tid}-${fileId}.jpg`
  const out = `public/test/test/test-${tid}/figure-contour-${tid}-${fileId}.svg`

  const image = fs.readFileSync(file)
  const pixels = jpeg.decode(image)
  const imageData = { width: pixels.width, height: pixels.height, data: pixels.data }
  const options = { scale: 1 }
  const svg = ImageTracer.imagedataToSVG(imageData, options)

  fs.writeFileSync(out, svg)
  console.log(out + ' was saved')
}