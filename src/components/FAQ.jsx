import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: '¿Cuál es el coste de una consulta inicial?',
    answer:
      'La primera consulta de evaluación es gratuita. En ella analizamos tu caso sin compromiso y te informamos sobre las opciones disponibles y sus costes asociados.',
  },
  {
    id: 2,
    question: '¿Cómo se determinan los honorarios?',
    answer:
      'Los honorarios dependen de la complejidad del caso, tiempo estimado y modalidad de trabajo (asesoría, gestión, litigio). Siempre presentamos un presupuesto detallado antes de iniciar.',
  },
  {
    id: 3,
    question: '¿Puedo cambiar de abogado durante el proceso?',
    answer:
      'Sí, tienes derecho a cambiar de representante legal en cualquier momento. Te asesoraremos sobre los trámites necesarios para garantizar una transición sin problemas.',
  },
  {
    id: 4,
    question: '¿Qué pasa si pierdo mi caso?',
    answer:
      'Analizamos cuidadosamente cada caso antes de asumirlo. Si existe riesgo, te lo comunicamos claramente. Nuestro objetivo es evitar litigios innecesarios mediante soluciones alternativas.',
  },
  {
    id: 5,
    question: '¿Ofrecen servicio de asesoría preventiva?',
    answer:
      'Sí, ofrecemos asesoría preventiva para personas y empresas. Revisamos contratos, documentos y procesos para evitar conflictos legales futuros.',
  },
  {
    id: 6,
    question: '¿Cuánto tiempo tarda resolver un caso?',
    answer:
      'El tiempo varía según la naturaleza del caso. Casos sencillos pueden resolverse en semanas, mientras que litigios complejos pueden tomar meses o años. Te mantendremos informado del progreso.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button
        className={`faq-question ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{faq.question}</span>
        <span className="chevron" aria-hidden="true">▼</span>
      </button>
      {open && <div className="faq-answer">{faq.answer}</div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Preguntas Frecuentes</span>
          <h2>Dudas Habituales</h2>
          <p>Respuestas claras a tus preguntas sobre nuestros servicios</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
