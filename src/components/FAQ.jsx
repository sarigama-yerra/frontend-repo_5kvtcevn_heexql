import { useState } from 'react'

const questions = [
  { q: '¿Cuál es la capacidad del salón?', a: 'Contamos con espacios modulables para distintos tamaños de evento. Consúltanos por el aforo según tu montaje.' },
  { q: '¿Incluyen catering y barra?', a: 'Sí, ofrecemos menús personalizados y opciones de barra abierta o por consumo.' },
  { q: '¿Pueden ayudar con la decoración?', a: 'Nuestro equipo diseña propuestas a medida según tu estilo y temática.' },
  { q: '¿Cómo reservo una visita?', a: 'Completa el formulario y te contactaremos para coordinar día y hora.' },
  { q: '¿Hay estacionamiento y accesibilidad?', a: 'Disponemos de estacionamiento y accesos adecuados. Te brindamos detalles según fecha y aforo.' },
  { q: '¿Trabajan eventos corporativos?', a: 'Sí, contamos con equipamiento audiovisual y montaje para conferencias, lanzamientos y reuniones.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-emerald-800 text-center">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-slate-200 border rounded-xl border-emerald-100 bg-white">
          {questions.map((item, idx) => {
            const active = open === idx
            return (
              <div key={item.q}>
                <button className="w-full text-left px-4 py-4 flex items-center justify-between" onClick={() => setOpen(active ? -1 : idx)}>
                  <span className="font-medium text-slate-900">{item.q}</span>
                  <span className={`text-emerald-700 transition-transform ${active ? 'rotate-45' : ''}`}>+</span>
                </button>
                {active && (
                  <div className="px-4 pb-4 text-slate-600 text-sm">{item.a}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
