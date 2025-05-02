'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"
import { ScreenshotLightbox } from "@/components/ScreenshotLightbox"

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" })

  const openLightbox = (src: string, alt: string) => {
    setCurrentImage({ src, alt })
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-gray-900/95">
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/icon512.png" alt="Phantom PI Logo" width={40} height={40} className="rounded-md" />
            <span className="text-xl font-bold text-white">Phantom PI: Mission Apparition</span>
          </div>
        
          <div>
            <Link href="https://rocket5studios.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-white/70">
              <p>By Rocket 5 Studios</p>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-10" />
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Game Background" 
          fill 
          className="object-cover object-center" 
          priority 
        />
        <div className="container mx-auto px-6 md:px-8 relative z-20 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Adventure Awaits!
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
          Enter A Haunted Mansion Full of Puzzles, Secrets Tricks & Traps!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://apps.apple.com/app/phantom-hunters" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/app-store-badge-xl.png"
                alt="Download on the App Store"
                width={240}
                height={80}
                className="h-14 w-auto"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Trailer Section */}
      <section id="trailer" className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Watch the Trailer</h2> */}
          <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/R1Jtt9G8TMs"
              title="Phantom PI: Mission Apparition Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-6 md:px-8">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Game Screenshots</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox("/images/PPI_SS01.png", "Phantom PI Screenshot 1")}>
              <Image
                src="/images/PPI_SS01.png"
                alt="Phantom PI Screenshot 1"
                width={960}
                height={540}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox("/images/PPI_SS02.png", "Phantom PI Screenshot 2")}>
              <Image
                src="/images/PPI_SS02.png"
                alt="Phantom PI Screenshot 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox("/images/PPI_SS03.png", "Phantom PI Screenshot 3")}>
              <Image
                src="/images/PPI_SS03.png"
                alt="Phantom PI Screenshot 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox("/images/PPI_SS04.png", "Phantom PI Screenshot 4")}>
              <Image
                src="/images/PPI_SS04.png"
                alt="Phantom PI Screenshot 4"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox("/images/PPI_SS05.png", "Phantom PI Screenshot 5")}>
              <Image
                src="/images/PPI_SS05.png"
                alt="Phantom PI Screenshot 5"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openLightbox("/images/PPI_SS06.png", "Phantom PI Screenshot 6")}>
              <Image
                src="/images/PPI_SS06.png"
                alt="Phantom PI Screenshot 6"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <ScreenshotLightbox 
        isOpen={lightboxOpen}
        imgSrc={currentImage.src}
        imgAlt={currentImage.alt}
        onClose={closeLightbox}
      />
      
      {/* Awards Section */}
      <section id="features" className="py-16 md:py-8 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mx-auto">
            <Image
              src="/images/awards.png"
              alt="Awards"
              width={553}
              height={186}
            />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About The Phantom PI: Mission Apparition</h2>
              <p className="text-gray-300 mb-4">
              Adventure awaits! Deep within the crumbling walls of Ravensmaw Manor, a mansion brimming with ghostly charm and eerie secrets, a mischievous poltergeist threatens the fragile after-life of beloved zombie-ghost rock legend, Marshall Staxx. Only The Phantom PI can uncover the truth and restore harmony to Marshall's haunted hall of fame!
              </p>
              <p className="text-gray-300 mb-4">
              Play as Cecil or Cecilia, quirky paranormal investigators to the ghostly stars, and step into a world of lighthearted spooks and spectral tricks and traps. You'll explore every shadowy nook and cobwebbed cranny of Ravensmaw Manor while solving clever puzzles, collecting clues, and rounding up troublesome sprites along the way.
              </p>
              <p className="text-gray-300 mb-6">
              With its unique blend of exploration, puzzle-solving, and a narrative-driven mystery, _The Phantom PI: Mission Apparition_ offers a family-friendly adventure packed with charm, humor, and just the right touch of spooky. 
              </p>
              <p className="text-gray-300 mb-6">
              Featuring an <Link href="https://aaronrobertson.bandcamp.com/album/phantom-p-i-mission-apparition-ost" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">original soundtrack</Link> by Aaron Robertson.
              </p>        
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://apps.apple.com/ca/app/phantom-p-i/id887608596" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/app-store-badge.png"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30 blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/icon1024.png" alt="Game on Device" width={600} height={800} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Players Say</h2> */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Different from the typical hidden object mystery, lots to do, lots to explore, lots of fun, and the graphics are great....my only complaint is that there aren't more episodes of this or similar games....I'd really like to see more from Rocket 5 if this is what they're capable of."
              </p>
              <div className="font-medium text-white">Shayapps</div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "I LOVE this game... It's perfect for those that like puzzles combined with adventure style games. It's addictive so you can play thru it kinda quick. And there isn't any re-playability unless you somehow didn't finish every level. So I'm just hoping that new Chapters & updates are coming and SOON!!! Love the game guys, great job🙋🏻😘❤️👍🏻👍🏻 💋"
              </p>
              <div className="font-medium text-white">Kellie929</div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Love it!
                I usually don't spend money on games, but I liked the screenshots in the App Store so I thought I'd try it. I'm glad I did because I like almost everything about it! The visuals are beautiful/original and adds a creepy-ish vibe. It also supports Canadian developers which is ultra rad!!!!"
              </p>
              <div className="font-medium text-white">Karczok</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Are you ready for adventure?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Download The Phantom PI: Mission Apparition today and embark on an unforgettable ghost hunting adventure.
          </p>
          <Link
            href="https://apps.apple.com/ca/app/phantom-p-i/id887608596"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/images/app-store-badge.png"
              alt="Download on the App Store"
              width={180}
              height={54}
              className="h-14 w-auto"
            />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white/70">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/images/icon512.png" alt="Game Logo" width={32} height={32} className="rounded-md" />
              <span className="text-lg font-bold text-white">The Phantom PI: Mission Apparition</span>
            </div>
            {/* <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </div> */}
            <div className="text-sm">© {new Date().getFullYear()} Rocket 5 Studios Inc. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
