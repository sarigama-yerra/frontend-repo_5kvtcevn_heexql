import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', local: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section id="contacto" className="bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Agenda una demo personalizada</h2>
          <p className="mt-2 text-slate-600">Déjanos tus datos y un asesor se pondrá en contacto para coordinar una demo enfocada en tu operación.</p>
          <div className="mt-6 p-4 rounded-xl border border-emerald-100 bg-white">
            <div className="text-sm text-slate-600">Contacto directo</div>
            <div className="mt-1 text-slate-900">ventas@solaz-events.com · +56 9 5555 5555</div>
            <div className="mt-2 flex gap-3 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-700">LinkedIn</a>
              <a href="#" className="hover:text-slate-700">Instagram</a>
              <a href="#" className="hover:text-slate-700">Facebook</a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-700 mb-1">Nombre</label>
              <input name="nombre" value={form.nombre} onChange={onChange} required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Teléfono</label>
              <input name="telefono" value={form.telefono} onChange={onChange} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Nombre del local de eventos</label>
              <input name="local" value={form.local} onChange={onChange} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-700 mb-1">Mensaje</label>
            <textarea name="mensaje" value={form.mensaje} onChange={onChange} rows={4} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center px-5 py-3 rounded-md bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors">
            {sent ? 'Enviado ✔' : 'Solicitar demo'}
          </button>
          {sent && <div className="mt-3 text-sm text-emerald-700">Gracias. Te contactaremos a la brevedad.</div>}
        </form>
      </div>
    </section>
  )
}
