import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Clean Environnement | Nettoyage professionnel pour un environnement propre',
  description: 'Entreprise de nettoyage écologique au Cameroun. Nettoyage de villas, bureaux, hôtels et établissements touristiques. Devis gratuit.',
}

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Nettoyage de Villas',
    description: 'Nettoyage complet intérieur et extérieur de votre villa. Service personnalisé selon vos besoins.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Nettoyage de Bureaux',
    description: 'Maintenance quotidienne de vos espaces de travail pour un environnement sain et productif.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Nettoyage d'Hôtels",
    description: 'Services adaptés aux établissements hôteliers: chambres, espaces communs, cuisines.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Nettoyage Spécialisé',
    description: 'Fenêtres, sols, meubles, tapis, canapés. Équipement professionnel pour un résultat impeccable.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Nettoyage Fin de Chantier',
    description: 'Nettoyage complet après travaux. Nous rendons les lieux habitables et impeccables.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Contrats Réguliers',
    description: 'Forfaits hebdomadaires ou mensuels pour un entretien régulier de vos espaces.',
  },
]

const advantages = [
  {
    title: 'Produits Écologiques',
    description: "Nous utilisons uniquement des produits biodégradables, non toxiques et respectueux de l'environnement.",
    icon: '🌿',
  },
  {
    title: 'Équipement Professionnel',
    description: 'Matériel de pointe et technologie moderne pour un nettoyage efficace et rapide.',
    icon: '⚙️',
  },
  {
    title: 'Personnel Qualifié',
    description: 'Équipe formée aux techniques de nettoyage professionnel et au service client.',
    icon: '👔',
  },
  {
    title: 'Flexibilité',
    description: 'Adaptation aux horaires et besoins spécifiques de chaque client.',
    icon: '🕐',
  },
]

const testimonials = [
  {
    name: 'Marie T.',
    role: 'Gérante Hôtel',
    comment: 'Clean Environnement assure le nettoyage de notre hôtel depuis 2 ans. Un service irréprochable et écologique!',
    rating: 5,
  },
  {
    name: 'Jean-Pierre B.',
    role: 'Chef entreprise',
    comment: 'Nos bureaux sont impeccables chaque matin. Équipe ponctuelle et professionnelle. Je recommande!',
    rating: 5,
  },
  {
    name: 'Fatou L.',
    role: 'Particulière',
    comment: 'Service excellent pour le nettoyage de ma villa. Produits écologiques, cest exactement ce que je cherchais.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-eco-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-eco/20 text-eco-light px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Entreprise éco-responsable</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Un Nettoyage Écologique pour un{' '}
              <span className="text-eco">Environnement Sain</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Clean Environnement offre des services de nettoyage professionnels au Cameroun avec des produits 100% écologiques. Qualité, fiabilité et respect de l&rsquo;environnement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact">Demander un devis gratuit</Button>
              <Button href="/services" variant="outline">Voir nos services</Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-700">
              <div>
                <p className="text-3xl font-bold text-eco">500+</p>
                <p className="text-gray-400 text-sm">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-eco">5+</p>
                <p className="text-gray-400 text-sm">Années dexperience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-eco">100%</p>
                <p className="text-gray-400 text-sm">Produits écologiques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Services"
            subtitle="Des solutions de nettoyage complètes pour tous vos besoins"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card p-8 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-eco/10 rounded-xl flex items-center justify-center text-eco mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link href="/services" className="inline-flex items-center gap-2 text-eco font-medium mt-4 hover:gap-3 transition-all">
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Pourquoi Choisir Clean Environnement?"
                subtitle="Nous combinons professionnalisme et engagement écologique"
                centered={false}
              />
              
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl">{advantage.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{advantage.title}</h3>
                      <p className="text-gray-600 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-eco/10 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🧹</div>
                  <p className="text-eco font-bold text-xl">Service de qualité</p>
                  <p className="text-gray-600">Respect de l&rsquo;environnement</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-eco text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="font-bold">Devis gratuit</p>
                <p className="text-sm opacity-90">Sous 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-eco to-eco-dark text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl mb-6">🌍</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Engagement Écologique</h2>
            <p className="text-lg opacity-90 mb-8">
              Nous utilisons exclusivement des produits de nettoyage biodégradables et non toxiques. 
              Notre mission est de rendre vos espaces impeccables tout en préservant notre planète.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-3xl font-bold">0%</p>
                <p className="text-sm opacity-90">Produits chimiques nocifs</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm opacity-90">Biodégradable</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-3xl font-bold">✓</p>
                <p className="text-sm opacity-90">Certifié écologique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Témoignages Clients"
            subtitle="Ce que nos clients disent de nous"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-eco/10 to-eco/5 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <SectionHeading 
                  title="Tarifs Abordables"
                  subtitle="Des prix clairs et adaptés à tous les budgets"
                  centered={false}
                />
                <p className="text-gray-600 mb-6">
                  Nous proposons des tarifs transparents selon la superficie et la fréquence de nettoyage. 
                  Demandez votre devis personnalisé gratuit!
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-eco" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Tarifs selon superficie
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-eco" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Forfaits réguliers (-15%)
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-eco" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Devis gratuit et sans engagement
                  </li>
                </ul>
                <Button href="/tarifs">Voir les tarifs</Button>
              </div>
              <div className="text-center">
                <div className="inline-block bg-eco text-white px-8 py-6 rounded-2xl shadow-xl">
                  <p className="text-sm opacity-90 mb-2">À partir de</p>
                  <p className="text-4xl font-bold">15.000</p>
                  <p className="text-lg">FCFA / intervention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Transformer Votre Espace?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Demandez votre devis gratuit aujourdhui et offrez-vous un environnement propre et sain!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Demander un devis</Button>
            <a href="tel:+237670929584" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +237 670 929 584
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
