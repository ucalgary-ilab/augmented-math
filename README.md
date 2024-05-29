# Augmented Math

```
npm install
```

```
node server.js
```

```
npm run start
```

For Mobile AR

```
HTTPS=true npm start
```

## For Node.js

When getting the node-canvas error for M1 Mac

```
brew install pkg-config cairo pango libpng jpeg giflib librsvg
```

## For Python

```
brew install swig
```

```
pip install trace_skeleton
pip install svgwrite
```

## For CnSTD

```
pyenv install 3.10
pyenv global 3.10
pip install cnstd cnocr
cnstd analyze -m mfd -i sample-1.jpg -o output-1.jpg
```

## For Google OCR
Get key.json
```
node lib/google-ocr.js
```


## Preparation Pipeline

You can test and convert your textbook data for free with the following:

- Step 1. Get a sample PDF page (e.g., `/public/sample/sample-01.pdf`)
- Step 2. Convert PDF to JPG with [Ezgif](https://ezgif.com/pdf-to-jpg) and save it (e.g., `/public/sample/sample-01.jpg`)
- Step 3. Perform OCR with [Google Cloud Vision API](https://cloud.google.com/vision/docs/drag-and-drop) and save response as a JSON file (e.g., `/public/sample/ocr-01.json`)
- Step 4. Perform math OCR with [MathPix Web Snip Tool](https://snip.mathpix.com/) and save it as a markdown file (e.g., `/public/sample/mathpix-01.md`)
- Step 5. Perform CnST by running `$ python lib/math-extract.py`
- Step 6. Get figure contour with `$ python lib/figure-extract.py`
- Step 7. Get figure line trace with `$ node lib/figure-extract.js`

if you are willing to pay for the API usage, please use `lib/google-ocr.js` and `lib/mathpix.js`

## TexToSVG MathML

```
mi: [x, y], mo: [+, =, ()], mn: [1, 2, 3], msup: [^2]
1D466: y, 1D465: x, ...
30: 0, 31: 1, 32: 2, ...
- x^2 = msup-mi-1D465, msup-mn-32
- 10  = mn-31-30
- \sqrt{x} = msqrt-mo-221A, msqrt-mi-1D465
```

# Citation

```
@inproceedings{chulpongsatorn2023augmented-math,
  title={Augmented Math: Authoring AR-Based Explorable Explanations by Augmenting Static Math Textbooks},
  author={Chulpongsatorn, Neil and Lunding, Mille Skovhus and Soni, Nishan and Suzuki, Ryo},
  booktitle={Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology},
  pages={1--15},
  year={2023}
}
```
