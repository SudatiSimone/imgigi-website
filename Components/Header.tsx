import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-black bg-opacity-80 backdrop-blur z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold text-emerald-400">Merisio Gianluigi</span>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-base">
          <a href="#hero" className="hover:text-emerald-400">Home</a>
          <a href="#percorso" className="hover:text-emerald-400">Percorso</a>
          <a href="#about" className="hover:text-emerald-400">About M2e</a>
          <a href="#contatti" className="hover:text-emerald-400">Contatti</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 pb-4 space-y-4 text-base">
          <a href="#hero" className="block hover:text-emerald-400">Home</a>
          <a href="#percorso" className="block hover:text-emerald-400">Percorso</a>
          <a href="#about" className="block hover:text-emerald-400">About M2e</a>
          <a href="#contatti" className="block hover:text-emerald-400">Contatti</a>
        </div>
      )}
    </header>
  )
}
