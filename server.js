import fs from 'fs'
import express from 'express'
import { createServer } from 'http'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import cors from 'cors'
const filename = fileURLToPath(import.meta.url)
const directory = dirname(filename)

const app = express()
const httpServer = createServer(app)
app.use(cors())

app.use(express.static(directory))

app.get('/', (req, res) => {
  res.sendFile(join(directory, '/public/index.html'))
})

httpServer.listen(4000, () => {
  console.log('listening 4000')
})
