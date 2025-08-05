export default function Header() {
  return (
    <header className="sticky top-0 bg-black bg-opacity-80 backdrop-blur z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-emerald-400">Merisio Gianluigi</span>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#hero" className="hover:text-emerald-400">Home</a>
          <a href="#chi-sono" className="hover:text-emerald-400">Chi sono</a>
          <a href="#percorso" className="hover:text-emerald-400">Percorso</a>
          <a href="#contatti" className="hover:text-emerald-400">Contatti</a>
        </nav>
      </div>
    </header>
  )
}
