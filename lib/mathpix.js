import axios from 'axios';
import fs from 'fs/promises';

const APP_ID = 'MATHPIX_APP_ID'
const APP_KEY = 'MATHPIX_APP_KEY'

const options = {
  headers: {
    'Content-Type': 'application/json',
    'app_id': APP_ID,
    'app_key': APP_KEY
  },
  url: 'https://api.mathpix.com/v3/text',
  method: 'POST'
};

const id = 1
const num = 10
const dir = `./public/test/test/test-${id}`

async function processImages() {
  for (let i = 1; i <= num; i++) {
    const imagePath = `${dir}/test-${id}-${String(i).padStart(2, '0')}.jpg`;

    // const imagePath = `./public/sample/sample-01.jpg`;


    try {
      const image = await fs.readFile(imagePath);
      const base64Image = Buffer.from(image).toString('base64');

      const response = await axios({
        ...options,
        data: JSON.stringify({
          'src': `data:image/jpg;base64,${base64Image}`,
          'math_inline_delimiters': ["$", "$"],
          'math_display_delimiters': ["$$", "$$"]
        }),
      });

      const markdown = response.data.text
      console.log(response);

      const outputPath = `${dir}/mathpix-${id}-${String(i).padStart(2, '0')}.md`;
      await fs.writeFile(outputPath, markdown);

    } catch (err) {
      console.error(err);
    }
  }
}

processImages();