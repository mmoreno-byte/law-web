const practices = [
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    description:
      'Asesoría en conflictos laborales, despidos, indemnizaciones, negociación colectiva y protección de derechos del trabajador.',
    areas: ['Despidos Improcedentes', 'Reclamación de Salarios', 'Accidentes Laborales', 'Negociación Colectiva'],
  },
  {
    id: 'mercantil',
    title: 'Derecho Mercantil',
    description:
      'Asesoría legal en constitución de empresas, resolución de conflictos mercantiles, contratos comerciales y litigios.',
    areas: ['Constitución de Empresas', 'Contratos Comerciales', 'Litigios Mercantiles', 'Reclamación de Deudas'],
  },
  {
    id: 'civil',
    title: 'Derecho Civil',
    description:
      'Herencias, testamentarías, divorcios contenciosos, resolución de conflictos patrimoniales y responsabilidad civil.',
    areas: ['Herencias y Sucesiones', 'Divorcios', 'Conflictos Inmobiliarios', 'Responsabilidad Civil'],
  },
]

function PracticeCard({ practice }) {
  return (
    <div className="practice-card card reveal">
      <h3>{practice.title}</h3>
      <p>{practice.description}</p>
      <div className="practice-areas">
        <p className="areas-label">Especialidades:</p>
        <ul>
          {practice.areas.map((area) => (
            <li key={area}>• {area}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Practices() {
  return (
    <section id="areas" className="practices">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Servicios</span>
          <h2>Áreas de Práctica</h2>
          <p>Asesoría completa en las áreas clave del derecho</p>
        </div>

        <div className="practices-grid">
          {practices.map((practice) => (
            <PracticeCard key={practice.id} practice={practice} />
          ))}
        </div>
      </div>
    </section>
  )
}
