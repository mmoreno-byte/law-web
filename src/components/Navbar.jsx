import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-brand">
          <h2>Despacho Jurídico</h2>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#inicio" onClick={() => setMenuOpen(false)}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#areas" onClick={() => setMenuOpen(false)}>
              Áreas de Práctica
            </a>
          </li>
          <li>
            <a href="#proceso" onClick={() => setMenuOpen(false)}>
              Nuestro Proceso
            </a>
          </li>
          <li>
            <a href="#sobre-nosotros" onClick={() => setMenuOpen(false)}>
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Contactar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
