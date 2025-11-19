import { useState } from 'react'

const questions = [
  { q: '¿Cómo es el proceso de implementación?', a: 'Realizamos un onboarding guiado, migración de datos si aplica y capacitación al equipo.' },
  { q: '¿Qué tipo de soporte ofrecen?', a: 'Soporte por email y chat, con planes de soporte prioritario para respuestas más rápidas.' },
  { q: '¿Se integra con nuestra operación actual?', a: 'Sí. Nuestro equipo evalúa procesos y propone una configuración que minimiza cambios.' },
  { q: '¿Podemos personalizar diseño y colores?', a: 'La interfaz es personalizable para que se adapte a la identidad del local de eventos.' },
  { q: '¿Qué pasa con la seguridad y permisos?', a: 'Incluimos roles, trazabilidad por usuario y cifrado de datos en tránsito.' },
  { q: '¿Hay contrato de permanencia?', a: 'Puedes cancelar cuando quieras. También ofrecemos descuentos anuales.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-slate-200 border rounded-xl border-slate-200 bg-white">
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
