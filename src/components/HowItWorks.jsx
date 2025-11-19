import { motion } from 'framer-motion'

const photos = [
  'https://images.unsplash.com/photo-1521337588524-2b387cd205b9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513672009112-8277f37f0a32?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="galeria" className="bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-emerald-800">Galería</h2>
        <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">Un vistazo a nuestros espacios y montajes. Imagina tu evento aquí.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <motion.div key={src} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.03}} className="relative overflow-hidden rounded-xl shadow-sm">
              <img src={src} alt="Foto del local de eventos" className="h-44 md:h-56 w-full object-cover hover:scale-105 transition-transform duration-500"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
