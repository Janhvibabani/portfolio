"use client"

import { useEffect, useState, useRef } from "react"

type SplashPageProps = {
  onComplete: () => void
}

export function SplashPage({ onComplete }: SplashPageProps) {
  const phrase = "small college, big companies"
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const idxRef = useRef(0) // ✅ stable reference

  useEffect(() => {
    const speed = 80 // ms per character

    const typer = setInterval(() => {
      const idx = idxRef.current
      if (idx < phrase.length) {
        setText((prev) => prev + phrase.charAt(idx))
        idxRef.current += 1
      } else {
        clearInterval(typer)
        setTimeout(() => {
          setCursorVisible(false)
          try {
            onComplete()
          } catch {}
        }, 700)
      }
    }, speed)

    const cursorBlink = setInterval(() => setCursorVisible((v) => !v), 500)

    return () => {
      clearInterval(typer)
      clearInterval(cursorBlink)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <div className="text-center px-8">
        <p className="text-white text-2xl md:text-3xl font-mono leading-relaxed max-w-2xl">
          <span>{text}</span>
          <span
            aria-hidden
            className={`ml-1 inline-block align-middle h-6 w-1 transition-colors ${
              cursorVisible ? "bg-white" : "bg-transparent"
            }`}
          />
        </p>
      </div>
    </div>
  )
}