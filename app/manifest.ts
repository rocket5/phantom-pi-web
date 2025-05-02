import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Phantom PI: Mission Apparition',
    short_name: 'Phantom PI',
    description: 'Enter a haunted mansion full of puzzles, secrets, tricks & traps in this award-winning adventure game.',
    start_url: '/',
    display: 'standalone',
    background_color: '#190732',
    theme_color: '#6d28d9',
    icons: [
      {
        src: '/images/icon512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/icon1024.png',
        sizes: '1024x1024',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
} 