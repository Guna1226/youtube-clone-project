/* ------------------ src/main.jsx ------------------ */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import Store from './components/Store'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <Provider store={Store}>
      <App />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>
)