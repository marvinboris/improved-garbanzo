import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Clean Environnement',
  description: 'Contactez Clean Environnement pour vos demandes de devis. Nettoyage écologique au Cameroun. Telephone: +237 670 929 584',
}

export default function Contact() {
  return (
    <>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-eco/10 to-eco/5">
        <div className="container-custom">
          <SectionHeading 
            title="Contactez-nous"
            subtitle="Nous sommes disponibles pour répondre à vos questions et vous proposer un devis gratuit"
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnees</h2>
              
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="space-y-6">
                  <a 
                    href="tel:+237670929584" 
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-eco/10 rounded-lg flex items-center justify-center text-eco group-hover:bg-eco group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telephone</p>
                      <p className="font-semibold text-gray-900 group-hover:text-eco transition-all">+237 670 929 584</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:cleanenvironnement237@gmail.com" 
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-eco/10 rounded-lg flex items-center justify-center text-eco group-hover:bg-eco group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-gray-900 group-hover:text-eco transition-all">cleanenvironnement237@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                    <div className="w-12 h-12 bg-eco/10 rounded-lg flex items-center justify-center text-eco">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Zone dintervention</p>
                      <p className="font-semibold text-gray-900">Cameroun</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                    <div className="w-12 h-12 bg-eco/10 rounded-lg flex items-center justify-center text-eco">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Horaires</p>
                      <p className="font-semibold text-gray-900">Lun - Sam: 7h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-eco to-eco-dark rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Pourquoi nous contacter?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Devis gratuit sous 24h
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Conseils personnalises
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Sans engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
