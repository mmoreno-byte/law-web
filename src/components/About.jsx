export default function About() {
  return (
    <section id="sobre-nosotros" className="about">
      <div className="container about-content">
        <div className="about-text reveal">
          <span className="eyebrow">Quiénes Somos</span>
          <h2>Experiencia, confianza y resultados.</h2>
          <p>
            Somos un despacho de abogacía con más de 15 años de experiencia en el asesoramiento legal integral.
            Nos especializamos en derecho civil, laboral y mercantil, brindando soluciones personalizadas a nuestros clientes.
          </p>
          <p>
            Nuestro equipo está formado por profesionales altamente cualificados comprometidos con la defensa rigurosa
            de tus derechos. Creemos en la transparencia, la comunicación clara y los resultados medibles.
          </p>
          <h3 style={{ marginTop: '2rem' }}>Nuestros Valores</h3>
          <ul className="values-list">
            <li><strong>Profesionalismo:</strong> Máxima calidad en cada caso</li>
            <li><strong>Transparencia:</strong> Comunicación clara sobre procesos y costes</li>
            <li><strong>Dedicación:</strong> Enfoque personalizado en cada cliente</li>
            <li><strong>Resultados:</strong> Orientación a objetivos concretos y medibles</li>
          </ul>
        </div>

        <div className="about-highlights reveal">
          <div className="highlight-box">
            <h3>Metodología</h3>
            <p>
              Análisis exhaustivo de cada caso, investigación legal profunda y estrategia
              personalizada basada en jurisprudencia actualizada.
            </p>
          </div>
          <div className="highlight-box">
            <h3>Disponibilidad</h3>
            <p>
              Atención personalizada con horarios flexibles. Disponibles para reuniones
              presenciales y consultas virtuales.
            </p>
          </div>
          <div className="highlight-box">
            <h3>Resultados Probados</h3>
            <p>
              98% de satisfacción de clientes. Track record sólido en resolución exitosa
              de casos complejos y litigiosos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
