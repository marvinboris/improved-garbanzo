import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Nos Services | Clean Environnement',
  description: 'Découvrez tous nos services de nettoyage écologique: villas, bureaux, hôtels, fenêtres, sols, meubles. Devis gratuit au Cameroun.',
}

const services = [
  {
    id: 'villas',
    title: 'Nettoyage de Villas',
    description: 'Nous offer un service complet de nettoyage pour votre villa, quelle soit de plain-pied ou à étages. Notre équipe soccupe de chaque espace avec rigueur et efficacité.',
    features: [
      'Nettoyage complet intérieur (salon, chambres, cuisines, salles de bains)',
      'Nettoyage extérieur (terrasse, balcon, jardin)',
      'Nettoyage des vitres et fenêtres',
      'Nettoyage des sols (carrelage, parquet, marbre)',
      'Detourage et poussière',
      'Vidange des poubelles',
    ],
    targets: ['Particuliers propriétaires de villas', 'Résidences secondaires', 'Promoteurs immobiliers'],
    icon: '🏠',
  },
  {
    id: 'bureaux',
    title: 'Nettoyage de Bureaux',
    description: 'Un environnement de travail propre est essentiel pour la productivité et le bien-être de vos employés. Nous assurons une maintenance quotidienne irréprochable.',
    features: [
      'Nettoyage des bureaux et open spaces',
      'Nettoyage des salles de réunion',
      'Entretien des sanitaires',
      'Nettoyage des cuisines',
      'Aspiration et lavage des sols',
      'Nettoyage des vitres intérieures',
      'Evacuation des déchets',
    ],
    targets: ['Entreprises', 'Cabinets professionnels', 'Cliniques', 'Etablissements scolaires'],
    icon: '🏢',
  },
  {
    id: 'hotels',
    title: 'Nettoyage dHotels',
    description: 'Nous comprenons les enjeux de propreté dans lhotellerie. Notre service est adapté aux standards élevés du secteur et assure une satisfaction optimale de vos clients.',
    features: [
      'Nettoyage des chambres (literie, salles de bains, sols)',
      'Nettoyage des espaces communs',
      'Nettoyage des halls daccueil',
      'Entretien des cuisines professionnelles',
      'Nettoyage des salles de réception',
      'Linge de maison (sur demande)',
      'Service rapide pour les departages',
    ],
    targets: ['Hôtels', 'Auberges', 'Résidences touristiques', 'Lodges'],
    icon: '🏨',
  },
  {
    id: 'vitres',
    title: 'Nettoyage de Vitres et Fenêtres',
    description: 'Des vitres impeccables font toute la différence. Nous utilisons des techniques professionnelles pour un résultat sans trace.',
    features: [
      'Vitres intérieures et extérieures',
      'Fenêtres de toutes tailles',
      'Vérandas et baies vitrées',
      'Moustiquaires',
      'Résultat sans trace',
      'Intervention en hauteur (Nacelle)',
    ],
    targets: ['Particuliers', 'Entreprises', 'Hôtels', 'Immeubles'],
    icon: '🪟',
  },
  {
    id: 'sols',
    title: 'Nettoyage de Sols',
    description: 'Nous utilisons des équipements professionnels pour nettoyer et entretenir tous types de sols.',
    features: [
      'Carrelage',
      'Parquet (stratifié, massif)',
      'Marbre et pierre naturelle',
      'Vinyle et PVC',
      'Tapis et moquettes',
      'Béton ciré',
      'Protections et lustre',
    ],
    targets: ['Particuliers', 'Entreprises', 'Commerces', 'Salles événementielles'],
    icon: '🧱',
  },
  {
    id: 'chantier',
    title: 'Nettoyage Fin de Chantier',
    description: 'Après les travaux, nous rendons vos espaces habitables et impeccables.',
    features: [
      'Enlèvement des gravats',
      'Nettoyage des poussières',
      'Lavage des sols et murs',
      'Nettoyage des sanitaires',
      'Vitres et cadres',
      'Polissage des surfaces',
      'Gestion des déchets',
    ],
    targets: ['Promoteurs immobiliers', 'Entreprises de BTP', 'Particuliers après travaux'],
    icon: '🔨',
  },
]

export default function Services() {
  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-eco/10 to-eco/5">
        <div className="container-custom">
          <SectionHeading 
            title="Nos Services de Nettoyage"
            subtitle="Des solutions complètes pour tous vos besoins"
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{service.icon}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Ce que nous faisons:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600">
                          <svg className="w-5 h-5 text-eco mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Ideal pour:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.targets.map((target, i) => (
                        <span key={i} className="bg-eco/10 text-eco px-4 py-2 rounded-full text-sm font-medium">
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-eco/10 to-eco/5 rounded-3xl p-8">
                  <div className="aspect-square rounded-2xl bg-white shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-8xl block mb-4">{service.icon}</span>
                      <p className="text-eco font-semibold">{service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous avez un besoin spécifique?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nhésitez pas à nous contacter. Nous adaptons nos services à vos besoins particuliers.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-eco text-white font-semibold rounded-lg hover:bg-eco-dark hover:shadow-lg transition-all">
           Contactez-nous
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
