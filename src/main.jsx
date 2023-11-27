import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="top">
      <img src="header.png" className="logo"></img>
      <div className="hr"></div>
    </div>
    <App />
  </React.StrictMode>,
)
