/* eslint-disable no-func-assign */
import Home from './Home.jsx'
import About from './About.jsx'

function App() {
  return <>404 Page Not Found</>
}

console.log(window.location.pathname)

if (window.location.pathname === "/") {
  App = Home
} else if (window.location.pathname === "/about") {
  App = About
}

export default App
