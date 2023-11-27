import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './navbar.jsx'
import './index.css'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar
      items={[
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' }
      ]}
    />
    <App />
  </React.StrictMode>,
)
