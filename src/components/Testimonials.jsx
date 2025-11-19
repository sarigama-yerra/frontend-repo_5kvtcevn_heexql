import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'Celebramos nuestra boda y fue mágico. El equipo nos acompañó en cada detalle y la comida estuvo espectacular.', name: 'Ana & Felipe', biz: 'Boda en Solaz' },
  { quote: 'Realizamos el aniversario de la empresa y todo salió impecable: sonido, ambientación y servicio.', name: 'Carla Muñoz', biz: 'Eventos Corporativos' },
  { quote: 'Mi cumpleaños fue inolvidable. La decoración temática quedó perfecta y el DJ mantuvo la pista llena.', name: 'Daniel Torres', biz: 'Cumpleaños' },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-emerald-800">Testimonios</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
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
