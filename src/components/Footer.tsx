import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-dark-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <div className="font-black text-xl tracking-tight mb-4">
              NEURO<span className="text-blue-400">TECH</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Agence digitale spécialisée en développement web, mobile et solutions IA sur mesure. Basée à Alger.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Sites Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Applications Mobiles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solutions IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plateformes SaaS</a></li>
              <li><Link to="/commander" className="hover:text-white transition-colors">Commander un projet</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <a href="mailto:contact@neurotech.dz" className="hover:text-white transition-colors">
                  contact@neurotech.dz
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <a href="tel:+213600000000" className="hover:text-white transition-colors">
                  +213 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Alger, Algérie</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} NEUROTECH. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}