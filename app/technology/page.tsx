"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Technology() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md relative overflow-hidden">
      {/* Cinematic HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] dark:opacity-[0.07]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      </div>

      <Navbar />

      <main className="pt-32 pb-section-margin max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding">
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display-lg text-5xl md:text-7xl lg:text-8xl font-black text-on-surface tracking-tight uppercase mb-8">
              The <span className="text-primary dark:text-primary-container">Tech</span> Behind
              <br />
              The Mission.
            </h1>
            <p className="font-body-lg text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              From neural-link stabilization to quantum-dot telemetry, explore the cutting-edge aerospace engineering that powers our fleet.
            </p>
          </div>
          <div className="relative aspect-video rounded-bento overflow-hidden bento-card-shadow">
            <Image 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
              alt="Aerospace Engineering"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-bento-gap mb-24">
          <div className="bg-white dark:bg-surface-container-low rounded-bento p-10 bento-card-shadow border border-outline-variant/30">
            <h3 className="font-display-lg text-2xl font-bold mb-4 uppercase tracking-wider">Neural-Link 2.0</h3>
            <p className="text-on-surface-variant">Zero-latency communication between pilot and machine, powered by proprietary AI-driven signal processing.</p>
          </div>
          <div className="bg-white dark:bg-surface-container-low rounded-bento p-10 bento-card-shadow border border-outline-variant/30">
            <h3 className="font-display-lg text-2xl font-bold mb-4 uppercase tracking-wider">Quantum Telemetry</h3>
            <p className="text-on-surface-variant">Real-time data encryption and high-bandwidth transmission across any terrain, regardless of interference.</p>
          </div>
        </div>

        {/* Technical Specs Section */}
        <section className="mb-24">
          <h2 className="font-display-lg text-4xl md:text-5xl font-black uppercase mb-12 text-center">Core <span className="text-primary">Specifications</span></h2>
          <div className="bg-white dark:bg-surface-container-low rounded-bento overflow-hidden bento-card-shadow border border-outline-variant/30">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-variant/50">
                  <th className="p-6 font-bold uppercase tracking-widest text-sm">Component</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-sm">Capability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {[
                  { component: "Processor", capability: "Hexa-Core AI Neural Engine" },
                  { component: "Sensor Suite", capability: "360° Omnidirectional LiDAR" },
                  { component: "Battery", capability: "Solid-State Hydrogen-Ion Cell" },
                  { component: "Communication", capability: "6G Satellite Uplink + Neural Link" },
                  { component: "Frame", capability: "Titanium-Grade Carbon Composites" }
                ].map((spec, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors">
                    <td className="p-6 font-bold uppercase text-primary text-sm">{spec.component}</td>
                    <td className="p-6 text-on-surface-variant">{spec.capability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
