import type { Metadata, Viewport } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Phantom PI: Mission Apparition | Puzzle Adventure Game',
  description: 'Enter a haunted mansion full of puzzles, secrets, tricks & traps in this award-winning adventure game. Available now on iOS!',
  keywords: ['phantom pi', 'mission apparition', 'puzzle game', 'adventure game', 'iOS game', 'haunted mansion'],
  authors: [{ name: 'Rocket 5 Studios' }],
  creator: 'Rocket 5 Studios',
  publisher: 'Rocket 5 Studios',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://phantompi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Phantom PI: Mission Apparition | Puzzle Adventure Game',
    description: 'Enter a haunted mansion full of puzzles, secrets, tricks & traps in this award-winning adventure game.',
    url: 'https://phantompi.com',
    siteName: 'The Phantom PI: Mission Apparition',
    images: [
      {
        url: '/images/icon1024.png',
        width: 1024,
        height: 1024,
        alt: 'The Phantom PI: Mission Apparition Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Phantom PI: Mission Apparition | Puzzle Adventure Game',
    description: 'Enter a haunted mansion full of puzzles, secrets, tricks & traps in this adventure game',
    images: ['/images/icon1024.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/icon512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icon512.png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#6d28d9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://phantompi.com" />
      </head>
      <body>
        {children}
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "The Phantom PI: Mission Apparition",
              "applicationCategory": "GameApplication",
              "operatingSystem": "iOS",
              "description": "Enter a haunted mansion full of puzzles, secrets, tricks & traps in this award-winning adventure game.",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
              },
              "image": "https://phantompi.com/images/icon1024.png",
              "downloadUrl": "https://apps.apple.com/ca/app/phantom-p-i/id887608596"
            }
          `}
        </Script>
      </body>
    </html>
  )
}
