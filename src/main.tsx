import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* HashRouter avoids 404s on GitHub Pages without server rewrites */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
