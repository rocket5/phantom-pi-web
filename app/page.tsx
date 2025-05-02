import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/icon512.png" alt="Phantom PI Logo" width={40} height={40} className="rounded-md" />
            <span className="text-xl font-bold">Phantom PI: Mission Apparition</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#trailer" className="text-sm font-medium hover:text-primary">
              Trailer
            </Link>
            <Link href="#screenshots" className="text-sm font-medium hover:text-primary">
              Screenshots
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <div>
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
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-10" />
        <Image src="/images/hero-bg.jpg" alt="Game Background" fill className="object-cover" priority />
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
          {/* <div className="flex items-center gap-2 mt-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/80">4.3 Rating on App Store</span>
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      {/* <section id="features" className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Game Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Immersive Storyline</h3>
              <p className="text-gray-300">
                Dive into a rich narrative with branching storylines and meaningful character development.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Stunning Visuals</h3>
              <p className="text-gray-300">Experience breathtaking graphics optimized for the latest mobile devices.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Epic Soundtrack</h3>
              <p className="text-gray-300">
                Immerse yourself with an original orchestral soundtrack that adapts to your gameplay.
              </p>
            </div>
          </div>
        </div>
      </section> */}

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
      <section id="screenshots" className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Game Screenshots</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/PhantomPI_1920x1080_01.png"
                alt="Game Screenshot 1"
                width={960}
                height={540}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/PhantomPI_1920x1080_02.png"
                alt="Game Screenshot 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/PhantomPI_1920x1080_03.png"
                alt="Game Screenshot 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/PhantomPI_1920x1080_04.png"
                alt="Game Screenshot 4"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/PhantomPI_1920x1080_05.png"
                alt="Game Screenshot 52"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/PhantomPI_1920x1080_06.png"
                alt="Game Screenshot 6"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
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
              Featuring an <Link href="https://aaronrobertson.bandcamp.com/album/phantom-p-i-mission-apparition-ost" target="_blank" rel="noopener noreferrer">original soundtrack</Link> by Aaron Robertson.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Players Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "This game is absolutely stunning! The story had me hooked from the beginning, and the gameplay is
                smooth and intuitive. Worth every penny!"
              </p>
              <div className="font-medium text-white">Sarah K.</div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Finally a premium mobile game with no ads or microtransactions! The graphics are console-quality and
                the soundtrack is phenomenal."
              </p>
              <div className="font-medium text-white">Michael T.</div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "I've been playing mobile games for years, and Cosmic Odyssey is easily in my top 3 of all time. The
                attention to detail is incredible."
              </p>
              <div className="font-medium text-white">James L.</div>
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
              <Image src="/logo.png" alt="Game Logo" width={32} height={32} className="rounded-md" />
              <span className="text-lg font-bold text-white">Phantom Hunters</span>
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </div>
            <div className="text-sm">© {new Date().getFullYear()} Spooky Games. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
