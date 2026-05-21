"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

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

        {/* Industry Case Studies */}
        <div className="flex flex-col gap-24 mb-24">
          {[
            { 
              title: "Agriculture", 
              subtitle: "Smart Farming & Yield Optimization",
              desc: "Deploying autonomous swarms for precision crop monitoring and targeted spraying, reducing chemical waste by 40%.", 
              metric: "30% Increase in Yield",
              img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
            },
            { 
              title: "Infrastructure", 
              subtitle: "Asset Integrity & Digital Twins",
              desc: "High-resolution 3D mapping and structural health monitoring for bridges, dams, and skyscrapers with sub-millimeter accuracy.", 
              metric: "90% Faster Inspections",
              img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            },
            { 
              title: "Public Safety", 
              subtitle: "Rapid Response & Search-and-Rescue",
              desc: "Equipping emergency teams with thermal-vision swarms and high-bandwidth telemetry for mission-critical situational awareness.", 
              metric: "Instant Deployment",
              img: "https://images.unsplash.com/photo-1518546305928-385624649695?q=80&w=2000&auto=format&fit=crop"
            }
          ].map((item, i) => (
            <section key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="font-label-caps text-primary font-bold tracking-widest mb-2 block uppercase">{item.title}</span>
                <h2 className="font-display-lg text-3xl md:text-5xl font-black uppercase mb-6">{item.subtitle}</h2>
                <p className="font-body-md text-lg text-on-surface-variant mb-8">{item.desc}</p>
                <div className="bg-primary-container/20 border-l-4 border-primary p-4 rounded-r-xl">
                  <span className="font-display-lg text-xl font-bold text-primary">{item.metric}</span>
                </div>
              </div>
              <div className="relative aspect-video rounded-bento overflow-hidden bento-card-shadow">
                <Image src={item.img} alt={item.title} fill unoptimized className="object-cover" />
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
