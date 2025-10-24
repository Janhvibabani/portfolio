"use client"
import { useState } from "react"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Socials from "@/components/socials"
import Footer from "@/components/footer"
import { SplashPage } from "@/components/splash-page"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <main className="min-h-screen bg-flower">
      {showSplash && <SplashPage onComplete={() => setShowSplash(false)} />}

      <div>
        <Hero />
        <Socials />
        <Services />
        <Footer />
      </div>
    </main>
  )
}