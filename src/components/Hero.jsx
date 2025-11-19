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
            El lugar perfecto para tus mejores momentos
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-4 text-lg text-slate-600">
            Un local de eventos elegante y versátil para matrimonios, cumpleaños, eventos corporativos, bautizos y todas tus celebraciones especiales.
          </motion.p>

          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2,duration:0.6}} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="inline-flex items-center px-5 py-3 rounded-md bg-amber-500 text-white font-medium shadow-sm hover:shadow-md hover:bg-emerald-600 transition-all">
              Solicitar cotización
            </a>
            <a href="#contacto" className="inline-flex items-center px-5 py-3 rounded-md border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors">
              Agendar visita
            </a>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="relative">
          <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-[0_10px_40px_rgba(16,24,40,0.08)]">
            <div className="p-6 grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
              <div className="space-y-3">
                <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="h-28 rounded-lg bg-[url('https://images.unsplash.com/photo-1519223400710-6da9e1b777ea?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
