import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Tarifs | Clean Environnement',
  description: 'Tarifs de nettoyage écologique au Cameroun. Devis gratuit selon superficie et fréquence. Forfaits réguliers avantageux.',
}

const pricingPlans = [
  {
    name: 'Basique',
    description: 'Pour un nettoyage ponctuel',
    price: '15.000',
    unit: 'FCFA',
    period: 'intervention',
    features: [
      'Nettoyage complet intérieur',
      '1 zone principale',
      'Produits écologiques',
      'Materiel inclus',
      'Garantie satisfaction',
    ],
    highlighted: false,
  },
  {
    name: 'Standard',
    description: 'Pour un nettoyage regulier',
    price: '12.000',
    unit: 'FCFA',
    period: '/semaine',
    features: [
      'Nettoyage complet intérieur',
      'Toutes pièces principales',
      'Produits écologiques',
      'Materiel inclus',
      'Garantie satisfaction',
      'Service prioritaire',
      '-15% sur le tarif ponctuel',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    description: 'Pour un entertient complet',
    price: '45.000',
    unit: 'FCFA',
    period: '/mois',
    features: [
      'Nettoyage complet intérieur + extérieur',
      'Toutes zones',
      'Produits écologiques',
      'Materiel inclus',
      'Garantie satisfaction',
      'Service prioritaire',
      'Nettoyage fin de mois inclus',
      '-25% sur le tarif ponctuel',
    ],
    highlighted: false,
  },
]

const additionalServices = [
  { name: 'Nettoyage vitres', price: '5.000 - 15.000', unit: 'FCFA' },
  { name: 'Nettoyage canapé', price: '10.000 - 25.000', unit: 'FCFA' },
  { name: 'Nettoyage tapis/moquette', price: '8.000 - 20.000', unit: 'FCFA' },
  { name: 'Nettoyage fin de chantier', price: 'Sur devis', unit: '' },
  { name: 'Nettoyage bureaux', price: '20.000 - 50.000', unit: 'FCFA/mois' },
  { name: 'Nettoyage hotel', price: 'Sur devis', unit: '' },
]

export default function Pricing() {
  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-eco/10 to-eco/5">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Tarifs"
            subtitle="Des prix transparents et adaptés à votre budget"
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-3xl p-8 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-eco to-eco-dark text-white shadow-xl scale-105' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-white text-eco-dark text-center py-1 px-4 rounded-full text-sm font-medium mb-6 inline-block">
                    Plus populaire
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                    {' '}{plan.unit} {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-eco'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={plan.highlighted ? 'text-white/90' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  href="/contact" 
                  variant={plan.highlighted ? 'secondary' : 'primary'}
                  className="w-full"
                >
                  Choisir ce forfait
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Services Additionnels"
            subtitle="Tarifs pour les services spécifiques"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-gray-100">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-6">
                    <div>
                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      <p className="text-sm text-gray-500">{service.unit || 'FCFA'}</p>
                    </div>
                    <p className="text-lg font-bold text-eco">
                      {service.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-eco/10 to-eco/5 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment sont calculés nos tarifs?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-eco text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Superficie</h3>
                      <p className="text-gray-600">La taille de lespace à nettoyer influence directement le temps et les ressources nécessaires.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-eco text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Fréquence</h3>
                      <p className="text-gray-600">Les contrats réguliers bénéficient de tarifs préférentiels (-15% à -25%).</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-eco text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Type de service</h3>
                      <p className="text-gray-600">Certains services nécessitent un équipement ou un produit spécifique.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                  <p className="text-gray-600 mb-2">Vous avez des questions?</p>
                  <p className="text-2xl font-bold text-gray-900 mb-4">Demandez votre devis gratuit!</p>
                  <Button href="/contact">Obtenir un devis</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-eco text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à bénéficier de nos services?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Demandez votre devis personnalisé et recevez une réponse sous 24h!
          </p>
          <Button href="/contact" className="bg-white text-eco hover:bg-gray-100">Demander un devis gratuit</Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
