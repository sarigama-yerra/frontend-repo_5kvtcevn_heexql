export default function Footer(){
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} Solaz Eventos</div>
        <div className="text-sm text-slate-500">Ejemplo de diseño. Los nombres y marcas son referenciales.</div>
      </div>
    </footer>
  )
}
