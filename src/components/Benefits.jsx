import { Sparkles, Utensils, Flower2, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Sparkles, title: 'Ambientes elegantes', text: 'Salones con iluminación cálida, jardines y terrazas para crear atmósferas memorables.' },
  { icon: Utensils, title: 'Catering completo', text: 'Menús personalizados, barra y atención de primera para tus invitados.' },
  { icon: Flower2, title: 'Decoración personalizada', text: 'Diseños a medida según tu estilo y temática, con montajes de alto impacto.' },
  { icon: Users, title: 'Equipo de coordinación', text: 'Acompañamiento profesional antes, durante y después del evento.' },
]

export default function Benefits() {
  return (
    <section id="por-que" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-emerald-800">¿Por qué elegirnos?</h2>
        <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">Todo lo que necesitas para celebrar sin preocupaciones en un espacio versátil, moderno y lleno de detalles.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, text}, i) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
