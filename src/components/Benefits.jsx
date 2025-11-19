import { Calendar, Wallet, Truck, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Calendar, title: 'Calendario inteligente', text: 'Visualiza y gestiona fechas, espacios y recursos con total claridad.' },
  { icon: Wallet, title: 'Ingresos y gastos por evento', text: 'Control detallado de presupuestos, cobros y costos en tiempo real.' },
  { icon: Truck, title: 'Decoración y proveedores', text: 'Registra pedidos, entregas y calidad de servicio con trazabilidad.' },
  { icon: Users, title: 'Almacén y personal', text: 'Inventario actualizado y asignación de equipos por evento.' },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, text}, i) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
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
