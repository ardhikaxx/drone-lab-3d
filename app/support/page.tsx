"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Support() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] dark:opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      </div>

      <Navbar />

      <main className="pt-32 pb-section-margin max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding">
        <section className="mb-24">
          <h1 className="font-display-lg text-5xl md:text-7xl lg:text-8xl font-black text-on-surface tracking-tight uppercase mb-8">
            We've Got <span className="text-primary dark:text-primary-container">Your Back.</span>
          </h1>
          <p className="font-body-lg text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Whether you're a solo pilot or managing a fleet, our technical elite are standing by to keep you airborne.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-bento-gap">
          {[
            { title: "Manuals", icon: "book" },
            { title: "Firmware", icon: "system_update" },
            { title: "Pilot Forum", icon: "groups" },
            { title: "Direct Line", icon: "headset_mic" }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-surface-container-low rounded-bento p-6 bento-card-shadow border border-outline-variant/30 flex flex-col items-center justify-center gap-4 hover:border-primary transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">{item.icon}</span>
              <h3 className="font-display-lg text-sm font-bold uppercase tracking-widest">{item.title}</h3>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
