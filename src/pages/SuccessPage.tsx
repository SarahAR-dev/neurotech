import { Link } from 'react-router-dom'
import { CheckCircle, ArrowLeft, Mail, Clock, Phone } from 'lucide-react'

export function SuccessPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-dark-900 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">

        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={40} className="text-blue-400" />
        </div>

        <h1 className="text-4xl font-black mb-4">
          Demande <span className="gradient-text">envoyée !</span>
        </h1>

        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Merci pour votre confiance. Notre équipe a bien reçu votre demande
          et vous contactera dans les meilleurs délais.
        </p>

        <div className="glass rounded-2xl p-8 mb-8 text-left space-y-4">
          <h2 className="font-bold text-white mb-4">Et maintenant ?</h2>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
              <Mail size={14} className="text-blue-400" />
            </div>
            <div>
              <div className="font-medium text-sm">Email de confirmation</div>
              <div className="text-slate-400 text-sm">Vous recevrez un email récapitulatif de votre demande.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
              <Clock size={14} className="text-blue-400" />
            </div>
            <div>
              <div className="font-medium text-sm">Devis sous 24h</div>
              <div className="text-slate-400 text-sm">Notre équipe prépare un devis détaillé pour votre projet.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
              <Phone size={14} className="text-blue-400" />
            </div>
            <div>
              <div className="font-medium text-sm">Appel de cadrage</div>
              <div className="text-slate-400 text-sm">On fixe un appel gratuit pour affiner les détails du projet.</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 glass rounded-xl text-slate-300 hover:bg-white/10 transition-all font-medium"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
          <a
            href="mailto:contact@neurotech.dz"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all"
          >
            <Mail size={16} />
            Nous contacter
          </a>
        </div>

      </div>
    </div>
  )
}