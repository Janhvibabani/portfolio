"use client"

export default function Hero() {
  return (
  <section className="pt-20 pb-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative image placeholder */}
        <div className="mb-12 flex justify-center">
          <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
              <img
                src="/doodly-photu.png"
                alt="Creative"
                className="w-48 h-48 rounded-lg object-cover"
              />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-serif font-light mb-8 leading-tight text-balance">
          Hey,
          <br />
          I am Janhvii!
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          A former SWE Intern @Google and @Amazon.
        </p>

        {/* CTA Button -> opens LinkedIn in new tab */}
        <a
          href="https://www.linkedin.com/in/janhvibabani"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <span className="text-sm">Get in touch</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
