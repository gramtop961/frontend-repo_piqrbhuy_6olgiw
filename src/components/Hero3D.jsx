import React, { lazy, Suspense, useEffect, useState } from 'react'

// Lazy-load Spline to avoid blocking the first paint and improve smoothness
const LazySpline = lazy(() => import('@splinetool/react-spline'))

const Hero3D = () => {
  const sceneUrl = 'https://prod.spline.design/6KqyFf1EWDzVY4xA/scene.splinecode'

  // Mount heavy 3D after first paint for smoother entry
  const [mount3D, setMount3D] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setMount3D(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden will-change-transform">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* 3D Scene Layer */}
      <div className="absolute inset-0 opacity-90 pointer-events-none select-none">
        {/* If the Spline scene fails to load, the gradient background still looks premium */}
        {mount3D ? (
          <Suspense
            fallback={
              <div className="w-full h-full bg-[radial-gradient(60%_60%_at_50%_40%,rgba(59,130,246,0.25),transparent)]" />
            }
          >
            <LazySpline scene={sceneUrl} />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-[radial-gradient(60%_60%_at_50%_40%,rgba(59,130,246,0.25),transparent)]" />
        )}
      </div>

      {/* Glass overlay for readability */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] p-6">
        <div className="max-w-5xl w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-blue-100 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <span className="text-xs tracking-widest">MADE IN INDIA</span>
            <span className="text-xs opacity-60">•</span>
            <span className="text-xs">Trusted Tech Partner</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
            PREMRATAN COMPUTERS
          </h1>
          <p className="mt-4 text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto">
            Laptops • Desktops • Printers • Mobile Service • Accessories • Upgrades • Repairs
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:8290246897"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white font-semibold shadow-lg shadow-blue-500/25 transition-transform duration-200"
            >
              Call: 8290246897
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-semibold border border-white/10 backdrop-blur-md transition-transform duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}

export default Hero3D
