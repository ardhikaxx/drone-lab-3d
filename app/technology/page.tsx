"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Technology() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md relative overflow-hidden">
      {/* Cinematic HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] dark:opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      </div>

      <Navbar />

      <main className="pt-32 pb-section-margin max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding">
        <section className="mb-24">
          <h1 className="font-display-lg text-5xl md:text-7xl lg:text-8xl font-black text-on-surface tracking-tight uppercase mb-8">
            The <span className="text-primary dark:text-primary-container">Tech</span> Behind
            <br />
            The Mission.
          </h1>
          <p className="font-body-lg text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            From neural-link stabilization to quantum-dot telemetry, explore the cutting-edge aerospace engineering that powers our fleet.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
          <div className="bg-white dark:bg-surface-container-low rounded-bento p-10 bento-card-shadow border border-outline-variant/30">
            <h3 className="font-display-lg text-2xl font-bold mb-4 uppercase tracking-wider">Neural-Link 2.0</h3>
            <p className="text-on-surface-variant">Zero-latency communication between pilot and machine, powered by proprietary AI-driven signal processing.</p>
          </div>
          <div className="bg-white dark:bg-surface-container-low rounded-bento p-10 bento-card-shadow border border-outline-variant/30">
            <h3 className="font-display-lg text-2xl font-bold mb-4 uppercase tracking-wider">Quantum Telemetry</h3>
            <p className="text-on-surface-variant">Real-time data encryption and high-bandwidth transmission across any terrain, regardless of interference.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
