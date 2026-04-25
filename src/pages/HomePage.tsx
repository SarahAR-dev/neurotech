import { Link } from 'react-router-dom'
import { Globe, Smartphone, Brain, Database, ArrowRight, CheckCircle, Star, Shield, Clock, Users } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Sites Web',
    description: 'Vitrine, e-commerce, blog — des sites rapides, modernes et optimisés SEO qui convertissent vos visiteurs en clients.',
    features: ['Design sur mesure', 'Responsive Mobile', 'Optimisation SEO', 'CMS intégré'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'iOS et Android natifs ou cross-platform. Des apps fluides avec une expérience utilisateur soignée.',
    features: ['iOS & Android', 'React Native', 'UI/UX premium', 'Publication stores'],
    color: 'from-blue-500 to-violet-600',
  },
  {
    icon: Brain,
    title: 'Solutions IA',
    description: 'Chatbots intelligents, automatisation, analyse de données — l\'IA au service de votre business.',
    features: ['Chatbots GPT', 'Automatisation', 'Analyse prédictive', 'Computer Vision'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Database,
    title: 'Plateformes SaaS',
    description: 'Développement de plateformes complètes avec tableau de bord, gestion utilisateurs et APIs robustes.',
    features: ['Architecture scalable', 'Tableau de bord', 'API REST', 'Paiements intégrés'],
    color: 'from-blue-500 to-cyan-600',
  },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'On analyse vos besoins et définissons ensemble les fonctionnalités clés.' },
  { step: '02', title: 'Conception', desc: 'Maquettes et prototypes pour valider le design avant le développement.' },
  { step: '03', title: 'Développement', desc: 'Développement avec des livraisons régulières et votre implication.' },
  { step: '04', title: 'Livraison', desc: 'Tests rigoureux, mise en production et formation à votre solution.' },
]

const pricing = [
  {
    name: 'Starter',
    price: '50 000',
    desc: 'Idéal pour les indépendants et petites structures',
    features: ['Site vitrine 5 pages', 'Design responsive', 'Formulaire de contact', 'SEO de base', '1 mois de support'],
    highlight: false,
  },
  {
    name: 'Business',
    price: '150 000',
    desc: 'Pour les PME qui veulent se démarquer',
    features: ['Site jusqu\'à 20 pages', 'Design premium', 'CMS complet', 'SEO avancé', 'Paiement en ligne', '3 mois de support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur devis',
    desc: 'Application mobile ou plateforme IA complète',
    features: ['Développement custom', 'App mobile iOS/Android', 'Solutions IA', 'API & intégrations', 'Support 12 mois'],
    highlight: false,
  },
]

const stats = [
  { value: '50+', label: 'Projets livrés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '4 ans', label: 'D\'expérience' },
  { value: '48h', label: 'Délai de réponse' },
]

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-blue-950/30 to-dark-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-slate-300 mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Agence digitale — Alger · Web · Mobile · IA
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Votre vision,
            <br />
            <span className="gradient-text">notre code.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nous créons des sites web, applications mobiles et solutions IA sur mesure
            qui propulsent votre business. Du concept à la mise en ligne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/commander"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              Commander mon projet
              <ArrowRight size={20} />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-semibold text-lg transition-all"
            >
              Voir nos services
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Nos <span className="gradient-text">expertises</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Une équipe pluridisciplinaire pour tous vos besoins digitaux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="glass rounded-2xl p-8 group hover:bg-white/10 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle size={14} className="text-blue-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processus" className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Notre <span className="gradient-text">processus</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-5xl font-black text-blue-600/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 glass rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div>
                <div className="font-semibold">Excellente réputation</div>
                <div className="text-slate-400 text-sm">Basé sur 50+ projets réalisés</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Shield size={16} className="text-blue-400" />
                Garantie satisfaction
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Clock size={16} className="text-blue-400" />
                Délais respectés
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Users size={16} className="text-blue-400" />
                Support réactif
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="tarifs" className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Des tarifs <span className="gradient-text">transparents</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Pas de surprise. Des prix clairs en dinars algériens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl p-8 flex flex-col ${plan.highlight ? 'bg-gradient-to-b from-blue-600 to-blue-800 shadow-2xl shadow-blue-600/30 scale-105' : 'glass'}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-dark-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Recommandé
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-blue-100' : 'text-slate-400'}`}>{plan.desc}</p>
                <div className="text-3xl font-black mb-8">
                  {plan.price === 'Sur devis' ? plan.price : `${plan.price} DA`}
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className={plan.highlight ? 'text-cyan-300' : 'text-blue-400'} />
                      <span className={plan.highlight ? 'text-blue-50' : 'text-slate-300'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/commander"
                  className={`w-full py-3 rounded-xl font-semibold text-center transition-all ${plan.highlight ? 'bg-white text-blue-700 hover:bg-blue-50' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                >
                  Commencer
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-black mb-4">
                Prêt à lancer <span className="gradient-text">votre projet</span> ?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                Remplissez notre formulaire en 3 minutes et recevez votre devis sous 48h.
              </p>
              <Link
                to="/commander"
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1"
              >
                Passer ma commande
                <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}