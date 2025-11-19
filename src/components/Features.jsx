import { Building2, Sparkles, PartyPopper, Music, Briefcase, Utensils } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { icon: Building2, title: 'Alquiler del salón', tag: 'Espacios versátiles' },
  { icon: Sparkles, title: 'Decoración temática', tag: 'A tu estilo' },
  { icon: Music, title: 'DJ y sonido', tag: 'Ambiente perfecto' },
  { icon: Utensils, title: 'Catering y barra', tag: 'Menús personalizados' },
  { icon: Briefcase, title: 'Eventos corporativos', tag: 'Reuniones y lanzamientos' },
  { icon: PartyPopper, title: 'Fiestas y celebraciones', tag: 'Bodas, cumpleaños y más' },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-emerald-800">Servicios</h2>
        <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">Todo en un solo lugar para que solo te ocupes de disfrutar.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({icon:Icon, title, tag}, i) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-6 rounded-xl border border-emerald-100 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">{tag}</span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <div className="mt-3 h-24 rounded-lg border border-slate-100 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
