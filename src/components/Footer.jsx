import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h4 className="text-white font-semibold text-lg">PREMRATAN COMPUTERS</h4>
          <p className="text-blue-200/80 text-sm">Made in India • Since 2024</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/918290246897"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-medium shadow shadow-emerald-500/25 transition-transform duration-200"
          >
            WhatsApp
          </a>
          <a
            href="tel:8290246897"
            className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white font-medium shadow shadow-blue-500/25 transition-transform duration-200"
          >
            Call: 8290246897
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
