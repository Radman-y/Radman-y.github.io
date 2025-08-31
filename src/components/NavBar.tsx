import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const { pathname } = useLocation()
  return (
    <header className="navbar">
      <nav className="nav">
        <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
  )
}
