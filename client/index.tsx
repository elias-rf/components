import '@fontsource/roboto/300.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.js'
import './index.css'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
