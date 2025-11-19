import { motion } from 'framer-motion'

const plans = [
  { name: 'Starter', price: '$59/mes', features: ['Hasta 50 eventos/año', '1 espacio', 'Soporte por email'] },
  { name: 'Pro', price: '$129/mes', features: ['Hasta 200 eventos/año', '3 espacios', 'Soporte prioritario', 'Reportes financieros'] },
  { name: 'Enterprise', price: 'A medida', features: ['Eventos ilimitados', 'Espacios ilimitados', 'Integraciones', 'Soporte dedicado'] },
]

export default function Pricing() {
  return (
    <section id="precios" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className={`p-6 rounded-xl border ${i===1 ? 'border-amber-200 shadow-lg' : 'border-slate-200 shadow-sm'} bg-white`}>
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold text-slate-900">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.features.map(f => (<li key={f}>• {f}</li>))}
              </ul>
              <a href="#contacto" className={`mt-6 inline-flex px-4 py-2 rounded-md ${i===1 ? 'bg-amber-500 text-white hover:bg-amber-600' : 'border border-emerald-200 text-emerald-700 hover:bg-emerald-50'} transition-colors`}>
                {i===2 ? 'Hablar con ventas' : 'Solicitar información'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
