import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import About from './pages/About.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="px-4 py-3 bg-gray-900">
        <nav className="container mx-auto flex gap-4 text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

