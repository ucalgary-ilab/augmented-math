import vision from '@google-cloud/vision';
import fs from 'fs/promises';

const keyFilename = '/path/to/google-api-key.json'
const client = new vision.ImageAnnotatorClient({ keyFilename });

const id = 1
const num = 10
const dir = `./public/test/test/test-${id}`

async function detectAndSaveText(i) {
  const index = String(i).padStart(2, '0')
  const fileName = `${dir}/test-${id}-${index}.jpg`;

  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations;

  const json = JSON.stringify(detections, null, 2);
  await fs.writeFile(`${dir}/ocr-${id}-${index}.json`, json);
}

async function processImages() {
  for (let i = 1; i <= num; i++) {
    await detectAndSaveText(i);
  }
}

processImages();
