import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Components/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
