import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Por qué elegirnos', href: '#por-que' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Tipos de eventos', href: '#tipos' },
  { label: 'Contacto', href: '#contacto' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold tracking-tight text-slate-900">Solaz Eventos</span>
          <span className="text-sm px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">Local de eventos</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-600 hover:text-emerald-700 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-amber-500 text-white font-medium hover:bg-emerald-600 hover:shadow-md transition-all">
            Solicitar cotización
          </a>
        </nav>

        <button aria-label="Abrir menú" className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-200" onClick={() => setOpen(true)}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-slate-900">Solaz Eventos</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">Local de eventos</span>
              </div>
              <button aria-label="Cerrar menú" className="p-2 rounded-md border border-slate-200" onClick={() => setOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-50 text-slate-700">
                  {item.label}
                </a>
              ))}
              <a href="#contacto" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-amber-500 text-white font-medium hover:bg-emerald-600 hover:shadow-md transition-all">
                Solicitar cotización
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
