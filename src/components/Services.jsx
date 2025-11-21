import React from 'react'
import { Laptop, Monitor, Printer, Smartphone, Headphones, HardDrive, Keyboard, Cpu, Wrench } from 'lucide-react'

const services = [
  { icon: Laptop, title: 'Laptops & Desktops', desc: 'Sales, setup, upgrades, and repairs for all brands.' },
  { icon: Printer, title: 'Printer Service', desc: 'Inkjet & laser servicing, cartridge refills, and support.' },
  { icon: Smartphone, title: 'Mobile Service', desc: 'Diagnostics, screen replacement, battery and more.' },
  { icon: Headphones, title: 'Audio & Wearables', desc: 'Earbuds, neckbands, headphones with quick warranty support.' },
  { icon: Monitor, title: 'Monitors & Displays', desc: 'New monitors, display replacements and calibration.' },
  { icon: Keyboard, title: 'Keyboards & Mice', desc: 'Wired/Wireless keyboards, mice and combos available.' },
  { icon: HardDrive, title: 'Storage & RAM', desc: 'SSDs, HDDs, RAM upgrades, data transfer and cloning.' },
  { icon: Cpu, title: 'Custom PC Builds', desc: 'Gaming, office, and creator rigs tailored to your needs.' },
  { icon: Wrench, title: 'Maintenance Plans', desc: 'Annual service packages for homes and businesses.' },
]

const Services = () => {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_25%),_radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_25%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          One-stop shop for everything tech
        </h2>
        <p className="text-blue-200/80 text-center mt-3 max-w-2xl mx-auto">
          Sales • Service • Upgrades • Accessories
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-all duration-300 shadow-xl shadow-slate-900/30 hover:shadow-2xl hover:shadow-slate-900/40 will-change-transform"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-200/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
