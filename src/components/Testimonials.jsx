import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'Nos permitió organizar bodas y eventos corporativos con total precisión. El equipo trabaja más tranquilo y el cliente lo nota.', name: 'María Gómez', biz: 'Salón de Eventos Aurora' },
  { quote: 'La trazabilidad y el control financiero nos dieron orden y visibilidad. Es justo lo que necesitábamos.', name: 'Jorge Silva', biz: 'Centro de Convenciones Andino' },
  { quote: 'Sencillo de usar y muy completo. El módulo de almacén nos salvó de quiebres de stock.', name: 'Lucía Rojas', biz: 'Eventos Horizonte' },
]

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote key={t.name} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-xl border border-emerald-100 bg-white shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">{t.name} · {t.biz}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
