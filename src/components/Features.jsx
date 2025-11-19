import { Shield, BarChart3, Boxes, CalendarDays, Users, ClipboardCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  { icon: CalendarDays, title: 'Calendario de eventos y reservas', tag: 'Datos en tiempo real' },
  { icon: Shield, title: 'Roles y permisos', tag: 'Trazabilidad por usuario' },
  { icon: ClipboardCheck, title: 'Control de gastos', tag: 'Insumos y adicionales' },
  { icon: Users, title: 'Control de ingresos', tag: 'Alquiler y extras' },
  { icon: Boxes, title: 'Módulo de almacén', tag: 'Stock y movimientos' },
  { icon: BarChart3, title: 'Panel financiero', tag: 'KPIs y rentabilidad' },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon, title, tag}, i) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{tag}</span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <div className="mt-3 h-24 rounded-lg border border-slate-100 bg-slate-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
