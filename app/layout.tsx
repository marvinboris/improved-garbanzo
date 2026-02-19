import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clean Environnement | Nettoyage Écologique au Cameroun',
  description: 'Entreprise de nettoyage professionnelle au Cameroun. Services de nettoyage écologique pour villas, bureaux, hôtels. Devis gratuit.',
  keywords: 'nettoyage, Cameroun, écologique, villa, bureau, hotel',
  openGraph: {
    title: 'Clean Environnement | Nettoyage Écologique au Cameroun',
    description: 'Entreprise de nettoyage professionnelle au Cameroun. Services écologiques pour particuliers et entreprises.',
    type: 'website',
    locale: 'fr_CM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  )
}
