import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-black text-xl tracking-tight">
            NEURO<span className="text-blue-400">TECH</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Services</a>
            <a href="/#processus" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Processus</a>
            <a href="/#tarifs" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Tarifs</a>
            <a href="/#contact" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
            <Link to="/commander" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-all">
              Commander
            </Link>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            <a href="/#services" className="text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Services</a>
            <a href="/#processus" className="text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Processus</a>
            <a href="/#tarifs" className="text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Tarifs</a>
            <a href="/#contact" className="text-slate-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Contact</a>
            <Link to="/commander" className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold text-center">
              Commander
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}