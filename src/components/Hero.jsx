export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <div className="hero-text reveal">
          <span className="eyebrow">Asesoría Legal Profesional</span>
          <h1>Protegemos tus intereses con experiencia y dedicación.</h1>
          <p className="hero-description">
            Despacho de abogacía especializado en derecho civil, laboral y mercantil.
            Asesoría legal integral para personas y empresas.
          </p>
          <div className="hero-cta">
            <a href="#contacto" className="btn btn-primary">
              Solicitar Consulta
            </a>
            <a href="#areas" className="btn btn-outline">
              Nuestros Servicios
            </a>
          </div>
        </div>
        <div className="hero-stats reveal">
          <div className="stat">
            <span className="stat-number">15+</span>
            <p>Años de Experiencia</p>
          </div>
          <div className="stat">
            <span className="stat-number">500+</span>
            <p>Clientes Satisfechos</p>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <p>Tasa de Éxito</p>
          </div>
        </div>
      </div>
    </section>
  )
}
