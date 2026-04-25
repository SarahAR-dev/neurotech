import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Send, ChevronDown } from 'lucide-react'

const serviceTypes = [
  { value: 'site-vitrine', label: 'Site Vitrine' },
  { value: 'site-ecommerce', label: 'Site E-commerce' },
  { value: 'application-mobile', label: 'Application Mobile' },
  { value: 'solution-ia', label: 'Solution IA / Chatbot' },
  { value: 'plateforme-saas', label: 'Plateforme / SaaS' },
  { value: 'autre', label: 'Autre' },
]

const budgets = [
  { value: 'moins-50000', label: 'Moins de 50 000 DA' },
  { value: '50000-150000', label: '50 000 – 150 000 DA' },
  { value: '150000-500000', label: '150 000 – 500 000 DA' },
  { value: 'plus-500000', label: 'Plus de 500 000 DA' },
  { value: 'a-definir', label: 'À définir ensemble' },
]

const delais = [
  { value: 'urgent', label: 'Urgent (moins de 2 semaines)' },
  { value: '1-mois', label: '1 mois' },
  { value: '2-3-mois', label: '2 à 3 mois' },
  { value: 'plus-3-mois', label: 'Plus de 3 mois' },
  { value: 'flexible', label: 'Flexible' },
]

const fonctionnalitesOptions = [
  'Formulaire de contact',
  'Espace membre / login',
  'Paiement en ligne',
  'Blog / Actualités',
  'Multi-langue',
  'Chat en ligne',
  'Notification push',
  'Dashboard / Stats',
  'API / Intégrations',
  'Géolocalisation',
]

type FormData = {
  nom: string
  prenom: string
  email: string
  telephone: string
  entreprise: string
  serviceType: string
  description: string
  fichier: File | null
  budget: string
  delai: string
  fonctionnalites: string[]
  referencesSites: string
  commentaires: string
}

const initialForm: FormData = {
  nom: '', prenom: '', email: '', telephone: '',
  entreprise: '', serviceType: '', description: '',
  fichier: null,
  budget: '', delai: '', fonctionnalites: [],
  referencesSites: '', commentaires: '',
}

export function OrderPage() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const set = (key: keyof FormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const toggleFonctionnalite = (f: string) => {
    setForm((prev) => ({
      ...prev,
      fonctionnalites: prev.fonctionnalites.includes(f)
        ? prev.fonctionnalites.filter((x) => x !== f)
        : [...prev.fonctionnalites, f],
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setSubmitting(true)

  

  try {
  const formData = new FormData()
  formData.append('prenom', form.prenom)
  formData.append('nom', form.nom)
  formData.append('email', form.email)
  formData.append('telephone', form.telephone)
  formData.append('entreprise', form.entreprise)
  formData.append('typeProjet', form.serviceType)
  formData.append('description', form.description)
  formData.append('budget', form.budget)
  formData.append('delai', form.delai)
  formData.append('fonctionnalites', form.fonctionnalites.join(', '))
  formData.append('referencesSites', form.referencesSites)
  formData.append('commentaires', form.commentaires)
  if (form.fichier) formData.append('fichier', form.fichier)

  const response = await fetch('https://formspree.io/f/mzdywzay', {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  })

  if (response.ok) {
    navigate('/merci')
  } else {
    alert('Une erreur est survenue. Veuillez réessayer.')
  }
} catch {
  alert('Une erreur est survenue. Vérifiez votre connexion.')
} finally {
  setSubmitting(false)
}
}

  return (
    <div className="min-h-screen pt-24 pb-16 bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black mb-3">
            Commander un <span className="gradient-text">projet</span>
          </h1>
          <p className="text-slate-400">
            Remplissez ce formulaire et recevez votre devis sous 48h.
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all ${
                s < step ? 'bg-blue-500 text-white' :
                s === step ? 'bg-blue-600 text-white' :
                'bg-dark-700 text-slate-500'
              }`}>
                {s < step ? '✓' : s}
              </div>
              <span className={`text-xs hidden sm:block ${s === step ? 'text-white font-medium' : 'text-slate-500'}`}>
                {s === 1 ? 'Vos infos' : s === 2 ? 'Votre projet' : 'Détails'}
              </span>
              {s < 3 && <div className={`h-px flex-1 ${s < step ? 'bg-blue-500' : 'bg-dark-700'}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="glass rounded-2xl p-8 space-y-6">

            {/* Step 1 */}
            {step === 1 && (
              <>
                <h2 className="text-xl font-bold">Vos informations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Prénom', key: 'prenom', placeholder: '' },
                    { label: 'Nom', key: 'nom', placeholder: '' },
                  ].map(({ label, key, placeholder }) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{label} <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        value={form[key as keyof FormData] as string}
                        onChange={(e) => set(key as keyof FormData)(e.target.value)}
                        placeholder={placeholder}
                        required
                        className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  ))}
                </div>
                {[
                  { label: 'Email', key: 'email', type: 'email', placeholder: 'email@email.com' },
                  { label: 'Téléphone', key: 'telephone', type: 'tel', placeholder: '+213 6 00 00 00 00' , required: true},
                  { label: 'Entreprise', key: 'entreprise', type: 'text', placeholder: 'Mon Entreprise' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {label} {key === 'email' && <span className="text-red-400">*</span>}
                    </label>
                    <input
                      type={type}
                      value={form[key as keyof FormData] as string}
                      onChange={(e) => set(key as keyof FormData)(e.target.value)}
                      placeholder={placeholder}
                      required={key === 'email'}
                      className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                ))}
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <h2 className="text-xl font-bold">Votre projet</h2>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Type de projet <span className="text-red-400">*</span></label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {serviceTypes.map((s) => (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => set('serviceType')(s.value)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                          form.serviceType === s.value
                            ? 'border-blue-500 bg-blue-600/20 text-white'
                            : 'border-slate-700 hover:border-slate-500 text-slate-300'
                        }`}
                      >
                        {form.serviceType === s.value ? '✓ ' : ''}{s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Décrivez votre projet <span className="text-red-400">*</span></label>
                  <textarea
                    value={form.description}
                    onChange={(e) => set('description')(e.target.value)}
                    rows={5}
                    required
                    placeholder="Expliquez votre idée, votre cible, vos objectifs..."
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                  />
                  <div>
  <label className="block text-sm font-medium text-slate-300 mb-2">
    Joindre un fichier <span className="text-slate-500 text-xs">(fiche technique, cahier des charges, logo...)</span>
  </label>
  <label className="flex items-center gap-3 glass rounded-xl px-4 py-3 cursor-pointer hover:bg-white/10 transition-all">
    <span className="text-blue-400 text-sm font-medium">
      {form.fichier ? form.fichier.name : 'Choisir un fichier'}
    </span>
    <input
      type="file"
      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
      onChange={(e) => setForm((prev) => ({ ...prev, fichier: e.target.files?.[0] ?? null }))}
      className="hidden"
    />
  </label>
  <p className="text-slate-500 text-xs mt-1">PDF, Word, image — max 10 Mo</p>
</div>
                </div>

                {[
                  { label: 'Budget estimé', key: 'budget', options: budgets },
                  { label: 'Délai souhaité', key: 'delai', options: delais },
                ].map(({ label, key, options }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{label} <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <select
                        value={form[key as keyof FormData] as string}
                        onChange={(e) => set(key as keyof FormData)(e.target.value)}
                        required
                        className="w-full glass rounded-xl px-4 py-3 text-white bg-dark-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      >
                        <option value="" disabled>Sélectionner...</option>
                        {options.map((o) => (
                          <option key={o.value} value={o.value} className="bg-dark-800">{o.label}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <h2 className="text-xl font-bold">Détails complémentaires</h2>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">Fonctionnalités souhaitées</label>
                  <div className="grid grid-cols-2 gap-2">
                    {fonctionnalitesOptions.map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => toggleFonctionnalite(f)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                          form.fonctionnalites.includes(f)
                            ? 'bg-blue-600 text-white'
                            : 'glass text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {form.fonctionnalites.includes(f) ? '✓ ' : ''}{f}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Sites de référence</label>
                  <input
                    type="text"
                    value={form.referencesSites}
                    onChange={(e) => set('referencesSites')(e.target.value)}
                    placeholder="https://exemple.com"
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Informations complémentaires</label>
                  <textarea
                    value={form.commentaires}
                    onChange={(e) => set('commentaires')(e.target.value)}
                    rows={4}
                    placeholder="Logo existant ? Couleurs précises ? Contraintes particulières ?"
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            {step > 1 && (
              <button type="button" onClick={() => setStep(step - 1)}
                className="flex-1 py-4 glass rounded-xl font-semibold text-slate-300 hover:bg-white/10 transition-all">
                Retour
              </button>
            )}
            {step < 3 ? (
              <button type="button"
                onClick={() => {
                  if (step === 1 && (!form.prenom || !form.nom || !form.email)) {
                    alert('Veuillez remplir les champs obligatoires.')
                    return
                  }
                  if (step === 2 && (!form.serviceType || !form.description || !form.budget || !form.delai)) {
                    alert('Veuillez remplir les champs obligatoires.')
                    return
                  }
                  setStep(step + 1)
                }}
                className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all">
                Continuer
              </button>
            ) : (
              <button type="submit" disabled={submitting}
                className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                {submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer ma demande
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}