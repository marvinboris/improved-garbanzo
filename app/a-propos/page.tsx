import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'A propos | Clean Environnement',
  description: 'Découvrez Clean Environnement, entreprise de nettoyage écologique au Cameroun. Notre mission, vision et engagement environnemental.',
}

export default function About() {
  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-eco/10 to-eco/5">
        <div className="container-custom">
          <SectionHeading 
            title="A propos de Clean Environnement"
            subtitle="Votre partenaire de confiance pour un nettoyage écologique professionnel"
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Une entreprise engagée pour l&rsquo;environnement</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Clean Environnement est une entreprise camerounaise de nettoyage professionnel qui privilégie les solutions écologiques. Nous croyons qu&rsquo;il est possible d&rsquo;obtenir des résultats exceptionnels tout en respectant notre planète.
              </p>
              <p className="text-gray-600 mb-6">
                Fondée avec la conviction que le nettoyage de qualité ne doit pas se faire au détriment de l&rsquo;environnement, notre entreprise s&rsquo;est donnée pour mission de révolutionner les standards du nettoyage au Cameroun.
              </p>
              <Button href="/contact">Travailler avec nous</Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-eco/10 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-8xl block mb-4">🌿</span>
                  <p className="text-eco font-bold text-xl">100% Ecologique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-eco/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-eco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Mission</h3>
              <p className="text-gray-600">
                Offrir des services de nettoyage professionnels de haute qualité en utilisant exclusivement des produits écologiques, tout en contribuant à la préservation de l&rsquo;environnement camerounais.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-eco/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-eco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Vision</h3>
              <p className="text-gray-600">
                Devenir la référence nationale du nettoyage écologique au Cameroun, en démontrant que qualité professionnelle et responsabilité environnementale peuvent aller de pair.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-eco/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-eco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
              <p className="text-gray-600">
                Ecologie, Professionnalisme, Fiabilité, Satisfaction client et Engagement social sont au cœur de toutes nos actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-eco to-eco-dark rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Engagement Ecologique</h2>
                <p className="text-lg opacity-90 mb-6">
                  Nous utilisons exclusivement des produits de nettoyage biodégradables, non toxiques et sans danger pour l&rsquo;environnement et la santé.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Produits 100% biodégradables
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Emballages recyclables
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Equipements basse consommation
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Formation du personnel aux pratiques vertes
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/10 rounded-3xl p-8">
                  <p className="text-6xl mb-4">🌍</p>
                  <p className="font-bold text-xl">Zéro Impact Environnemental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Pourquoi nous choisir?"
            subtitle="Les avantages de Clean Environnement"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Materiel Professionnel</h3>
              <p className="text-gray-600 text-sm">Equipements de pointe pour un résultat impeccable</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Personnel Qualifié</h3>
              <p className="text-gray-600 text-sm">Equipe formée et expérimentée</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Ponctualité</h3>
              <p className="text-gray-600 text-sm">Respect des horaires convenus</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Garantie</h3>
              <p className="text-gray-600 text-sm">Service après-vente réactif</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Interessé par nos services?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nhésitez pas à nous contacter pour discuter de vos besoins ou demander un devis gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Demander un devis</Button>
            <Button href="/services" variant="outline">Voir nos services</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
