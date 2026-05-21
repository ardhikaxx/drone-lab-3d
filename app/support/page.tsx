"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Support() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] dark:opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      </div>

      <Navbar />

      <main className="pt-32 pb-section-margin max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding">
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display-lg text-5xl md:text-7xl lg:text-8xl font-black text-on-surface tracking-tight uppercase mb-8">
              We've Got <span className="text-primary dark:text-primary-container">Your Back.</span>
            </h1>
            <p className="font-body-lg text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Whether you're a solo pilot or managing a fleet, our technical elite are standing by to keep you airborne.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-bento overflow-hidden bento-card-shadow">
            <Image 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop"
              alt="Futuristic Support"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-bento-gap mb-24">
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

        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-surface-container-low rounded-bento p-8 md:p-12 bento-card-shadow border border-outline-variant/30">
            <div className="text-center mb-12">
              <h2 className="font-display-lg text-3xl md:text-4xl font-black uppercase mb-4">Initialize <span className="text-primary">Contact</span></h2>
              <p className="text-on-surface-variant">Send a secure transmission to our support core.</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Pilot Name</label>
                <input type="text" className="bg-background/50 border border-outline-variant/30 rounded-xl p-4 focus:border-primary outline-none transition-colors" placeholder="e.g. Maverick" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Transmission ID (Email)</label>
                <input type="email" className="bg-background/50 border border-outline-variant/30 rounded-xl p-4 focus:border-primary outline-none transition-colors" placeholder="pilot@drone-lab.com" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Message Core</label>
                <textarea className="bg-background/50 border border-outline-variant/30 rounded-xl p-4 focus:border-primary outline-none transition-colors h-32 resize-none" placeholder="Detail your operational status..."></textarea>
              </div>
              <button className="md:col-span-2 bg-on-background text-white dark:text-inverse-on-surface py-4 rounded-xl font-bold uppercase tracking-[0.2em] hover:opacity-90 active:scale-[0.98] transition-all">
                Send Transmission
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
