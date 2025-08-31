import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} React + Vite + TS on GitHub Pages</p>
      </footer>
    </div>
  )
}
