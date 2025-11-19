import { motion } from 'framer-motion'

const eventTypes = [
  { name: 'Bodas', desc: 'Ceremonias y recepciones con montajes elegantes y pista de baile.' },
  { name: 'Cumpleaños', desc: 'Fiestas temáticas para todas las edades con DJ, barra y entretenimiento.' },
  { name: 'Eventos corporativos', desc: 'Conferencias, lanzamientos y reuniones con soporte técnico y catering.' },
  { name: 'Otros eventos', desc: 'Bautizos, aniversarios, graduaciones y más. Cuéntanos tu idea.' },
]

export default function EventTypes() {
  return (
    <section id="tipos" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-emerald-800">Tipos de eventos</h2>
        <div className="mt-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {eventTypes.map((p, i) => (
            <motion.div key={p.name} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className={`p-6 rounded-xl border border-emerald-100 bg-white shadow-sm hover:shadow-md`}>
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <a href="#contacto" className="mt-4 inline-flex px-4 py-2 rounded-md border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors">
                Solicitar cotización
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
