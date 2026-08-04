export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Despacho Jurídico</h3>
          <p>Asesoría legal profesional en derecho civil, laboral y mercantil.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#areas">Servicios</a>
            </li>
            <li>
              <a href="#proceso">Proceso</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Teléfono: +34 XXX XXX XXX</p>
          <p>Email: contact@despacho-juridico.es</p>
          <p>Madrid, España</p>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">𝕏</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Despacho Jurídico. Todos los derechos reservados.</p>
        <div className="legal-links">
          <a href="#aviso-legal">Aviso Legal</a>
          <a href="#privacidad">Política de Privacidad</a>
          <a href="#cookies">Política de Cookies</a>
        </div>
      </div>
    </footer>
  )
}
