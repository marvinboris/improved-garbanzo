'use client'

import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import { FormEvent } from 'react'

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Merci pour votre message! Nous vous contacterons sous 24h.')
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco focus:border-transparent outline-none transition-all"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Telephone *
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco focus:border-transparent outline-none transition-all"
              placeholder="+237 xxx xxx xxx"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco focus:border-transparent outline-none transition-all"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service souhaite
          </label>
          <select
            id="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco focus:border-transparent outline-none transition-all"
          >
            <option value="">Selectionnez un service</option>
            <option value="villa">Nettoyage de villa</option>
            <option value="bureau">Nettoyage de bureaux</option>
            <option value="hotel">Nettoyage d&apos;hotel</option>
            <option value="vitres">Nettoyage de vitres</option>
            <option value="sols">Nettoyage de sols</option>
            <option value="chantier">Nettoyage fin de chantier</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco focus:border-transparent outline-none transition-all resize-none"
            placeholder="Decrivez votre besoin (superficie approximative, frequence souhaitee, etc.)"
          ></textarea>
        </div>

        <Button type="submit" className="w-full">
          Envoyer ma demande de devis
        </Button>
      </form>
    </>
  )
}
