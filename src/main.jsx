import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { PlantsProvider } from './context/PlantsContext.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CategoriesProvider } from './context/CategoriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlantsProvider>
      <CategoriesProvider>
      <BrowserRouter basename='/Plant-shop'>
      <App />
      </BrowserRouter>
      </CategoriesProvider>
    </PlantsProvider>
  </StrictMode>,
)
