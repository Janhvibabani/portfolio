"use client"

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Main message */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-light leading-tight text-balance mb-8">
            This porfolio was made with love.
          </h2>
        </div>

        {/* CTA Section */}
        <div className="py-12 border-t border-b border-border">
          <h3 className="text-sm font-medium tracking-wide mb-6">Ready to work together?</h3>
          <a
            href="https://www.linkedin.com/in/janhvibabani"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              try {
                e.preventDefault()
                window.open("https://www.linkedin.com/in/janhvibabani", "_blank", "noopener,noreferrer")
              } catch {
                // fallback to default behaviour
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <span className="text-sm">Get in touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  )
}
