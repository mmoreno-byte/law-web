const steps = [
  {
    id: 1,
    title: 'Consulta Inicial',
    description: 'Análisis gratuito de tu caso. Nos reunimos contigo para entender tus necesidades y objetivos legales.',
  },
  {
    id: 2,
    title: 'Estrategia Legal',
    description: 'Desarrollamos una estrategia personalizada adaptada a tu situación. Te presentamos las opciones y costes.',
  },
  {
    id: 3,
    title: 'Representación',
    description: 'Te representamos en ámbito judicial y extrajudicial: arbitraje, mediación, negociación y conciliación.',
  },
  {
    id: 4,
    title: 'Resolución',
    description: 'Gestionamos el resultado final y te asesoramos sobre los pasos a seguir. Seguimiento post-cierre.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Cómo Trabajamos</span>
          <h2>Nuestro Proceso</h2>
          <p>Camino claro hacia la resolución de tu caso</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
              <div key={step.id} className="process-step reveal">
                <div className="step-content">
                  <h4>
                    <span className="step-number">{step.id}</span> {step.title}
                  </h4>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="step-arrow" aria-hidden="true">
                  →
                </div>}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
