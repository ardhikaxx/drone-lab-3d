"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] dark:opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      </div>

      <Navbar />

      <main className="pt-32 pb-section-margin max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding">
        <section className="mb-24 text-center">
          <h1 className="font-display-lg text-5xl md:text-7xl lg:text-8xl font-black text-on-surface tracking-tight uppercase mb-8">
            Industrial <span className="text-primary dark:text-primary-container">Scale</span>
            <br />
            Precision.
          </h1>
          <p className="font-body-lg text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Empowering industries with fleet-wide automation, predictive analytics, and aerospace-grade hardware tailored for large-scale operations.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-bento-gap">
          {[
            { title: "Agriculture", desc: "Precision crop monitoring and autonomous spraying systems." },
            { title: "Infrastructure", desc: "High-resolution structural inspection and thermal mapping." },
            { title: "Public Safety", desc: "Rapid deployment surveillance and thermal search-and-rescue." }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-surface-container-low rounded-bento p-8 bento-card-shadow border border-outline-variant/30 text-center">
              <h3 className="font-display-lg text-xl font-bold mb-4 uppercase">{item.title}</h3>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
