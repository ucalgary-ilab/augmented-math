import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

const interval = setInterval(() => {
  const rootDom = document.getElementById('root')
  if (!rootDom) return
  ReactDOM.createRoot(rootDom).render(<App />)
  clearInterval(interval)
}, 10)