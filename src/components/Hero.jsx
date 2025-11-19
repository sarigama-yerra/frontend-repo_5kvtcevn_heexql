import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white pt-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-amber-200/50 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="py-8">
          <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900"> 
            Control total de tus eventos en una sola plataforma
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-4 text-lg text-slate-600">
            Calendario, reservas, gastos, ingresos, decoración, personal y almacén, todo centralizado en tiempo real.
          </motion.p>

          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2,duration:0.6}} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="inline-flex items-center px-5 py-3 rounded-md bg-amber-500 text-white font-medium shadow-sm hover:shadow-md hover:bg-amber-600 transition-all">
              Solicitar demo
            </a>
            <a href="#como-funciona" className="inline-flex items-center px-5 py-3 rounded-md border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors">
              Ver cómo funciona
            </a>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="relative">
          <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-[0_10px_40px_rgba(16,24,40,0.08)]">
            <div className="p-4 border-b border-slate-100 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="h-24 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-medium">Calendario</div>
                <div className="h-24 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 font-medium">Ingresos</div>
                <div className="h-24 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-medium">Gastos</div>
              </div>
              <div className="space-y-3">
                <div className="h-24 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 font-medium">Proveedores</div>
                <div className="h-24 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 font-medium">Almacén</div>
                <div className="h-24 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 font-medium">Estadísticas</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
