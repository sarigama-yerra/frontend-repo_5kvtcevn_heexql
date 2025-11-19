import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Registra el evento o reserva',
    text: 'Crea el evento con fecha, tipo, capacidad y requerimientos iniciales.'
  },
  {
    num: '02',
    title: 'Configura todos los detalles',
    text: 'Comida, bebidas, decoración, proveedores y personal asignado en minutos.'
  },
  {
    num: '03',
    title: 'Controla costos e ingresos',
    text: 'Sigue gastos, cobros y movimientos de almacén en tiempo real.'
  },
  {
    num: '04',
    title: 'Analiza la rentabilidad',
    text: 'Accede a paneles financieros claros para decisiones rápidas.'
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-xl border border-emerald-100 bg-white">
              <div className="text-emerald-700 font-semibold">{s.num}</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
