import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {table} from './data.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App table={table} />
  </StrictMode>,
)
