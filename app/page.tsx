"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DroneViewer from "@/components/DroneViewer";

export default function Home() {
  const heroCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroCard = heroCardRef.current;
    if (!heroCard) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 60;
      const rotateY = (centerX - x) / 60;

      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      heroCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    heroCard.addEventListener("mousemove", handleMouseMove);
    heroCard.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroCard.removeEventListener("mousemove", handleMouseMove);
      heroCard.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container dark:selection:bg-primary-container dark:selection:text-on-primary-container">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-section-margin">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding grid grid-cols-1 lg:grid-cols-12 gap-bento-gap items-center mb-16 md:mb-24">
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start">
            <h1 className="font-display-lg text-6xl md:text-8xl lg:text-[100px] leading-none md:leading-[0.9] font-extrabold text-on-surface tracking-tighter">
              Next-G
              <span className="inline-block relative">
                e
                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2 bg-primary dark:bg-primary-container rounded-full"></span>
              </span>
              n Drones.
              <br />
              <span className="text-primary dark:text-primary-container">
                Bold Explorers.
              </span>
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-md">
              Engineered for cinematic precision and industrial reliability. Our
              fleet delivers high-performance aerospace engineering to every
              mission.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    alt="User"
                    width={40}
                    height={40}
                    unoptimized
                    className="w-10 h-10 rounded-full border-2 border-surface dark:border-surface-container"
                    src={`https://images.unsplash.com/photo-${
                      i === 1 ? "1535713875002-d1d0cf377fde" : 
                      i === 2 ? "1438761681033-6461ffad8d80" : 
                      "1599566150163-29194dcaad36"
                    }?q=80&w=100&auto=format&fit=crop`}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="font-stats-number text-body-md font-bold text-on-surface">
                  4.9/5 from 2k+ pilots
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-primary dark:text-primary-container text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 w-full">
            <div
              ref={heroCardRef}
              className="bg-white dark:bg-surface-container-low rounded-bento p-4 md:p-8 bento-card-shadow border border-outline-variant/30 dark:border-outline-variant/20 overflow-hidden relative group transition-transform duration-200 ease-out"
            >
              <Image
                alt="Drone on Map"
                width={800}
                height={500}
                unoptimized
                priority
                className="w-full h-auto rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2000&auto=format&fit=crop"
                style={{ height: "auto" }}
              />
              <div className="absolute top-8 left-8 md:top-12 md:left-12">
                <span className="font-label-caps text-[10px] md:text-label-caps bg-primary dark:bg-primary-container text-white px-3 py-1 rounded-full">
                  LIVE TELEMETRY
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section (Bento Grid) */}
        <section className="max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-bento-gap">
            {/* Irregular Image Card */}
            <div className="lg:col-span-2 relative bg-white dark:bg-surface-container-low rounded-bento p-6 bento-card-shadow border border-outline-variant/30 dark:border-outline-variant/20 overflow-hidden min-h-80 md:min-h-120">
              <Image
                alt="Flying Drone"
                fill
                unoptimized
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=2000&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 dark:from-black/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 md:w-20 md:h-20 bg-on-background text-white dark:text-inverse-on-surface rounded-full flex items-center justify-center hover:bg-primary dark:hover:bg-primary-container transition-colors active:scale-90 duration-300">
                  <span
                    className="material-symbols-outlined text-[32px] md:text-[40px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                <span className="font-label-caps text-[10px] md:text-label-caps text-white/80 mb-1 md:mb-2 block">
                  FIELD RECORDING
                </span>
                <h3 className="font-headline-md text-xl md:text-headline-md">
                  High-Altitude Stability
                </h3>
              </div>
            </div>
            {/* Text Block Card */}
            <div className="bg-white dark:bg-surface-container-low rounded-bento p-8 md:p-10 bento-card-shadow border border-outline-variant/30 dark:border-outline-variant/20 flex flex-col justify-end gap-6 h-full">
              <div>
                <div className="w-12 h-12 bg-primary-fixed-dim/20 dark:bg-primary-container/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary dark:text-primary-container text-[28px]">
                    speed
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface mb-4">
                  Engineered for Performance
                </h2>
                <p className="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed">
                  Every component is precision-milled from aerospace-grade carbon
                  fiber. Experience speeds of up to 120km/h with surgical
                  handling.
                </p>
              </div>
              <button className="w-full bg-on-background text-white dark:text-inverse-on-surface py-3 md:py-4 rounded-xl font-body-md text-body-md font-bold hover:opacity-90 transition-opacity active:scale-[0.98] duration-200">
                View Technical Specs
              </button>
            </div>
          </div>
        </section>

        {/* Explorer Section */}
        <section className="max-w-[1440px] mx-auto px-mobile-margin md:px-container-padding">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-display-lg text-4xl md:text-6xl lg:text-7xl font-extrabold text-on-surface tracking-tighter mb-6">
              Explore Every <span className="text-primary dark:text-primary-container">Detail</span>
            </h2>
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Experience the pinnacle of modular aerospace engineering. 
              Interactive 3D architecture designed for total mission control.
            </p>
          </div>
          <div className="relative bg-white dark:bg-surface-container-low rounded-bento p-0 bento-card-shadow border border-outline-variant/30 dark:border-outline-variant/20 overflow-hidden aspect-square sm:aspect-video lg:aspect-[21/9]">
            <DroneViewer />
            {/* Interaction Hints */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[10%] left-[10%] md:top-1/4 md:left-1/4 glass-hud p-2 md:p-4 rounded-xl flex flex-col gap-0.5 md:gap-1 scale-75 md:scale-100">
                <span className="font-label-caps text-[8px] md:text-[10px] text-white/60 dark:text-on-surface-variant">
                  SENSORS
                </span>
                <span className="font-body-md text-xs md:text-body-md text-white dark:text-on-surface font-semibold">
                  Active LiDAR 2.0
                </span>
              </div>
              <div className="absolute bottom-[20%] right-[10%] md:bottom-1/3 md:right-1/4 glass-hud p-2 md:p-4 rounded-xl flex flex-col gap-0.5 md:gap-1 scale-75 md:scale-100">
                <span className="font-label-caps text-[8px] md:text-[10px] text-white/60 dark:text-on-surface-variant">
                  BATTERY
                </span>
                <span className="font-body-md text-xs md:text-body-md text-white dark:text-on-surface font-semibold">
                  84% Remaining
                </span>
              </div>
              <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 bg-on-background/10 dark:bg-surface/40 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 dark:border-outline-variant/20 whitespace-nowrap">
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="material-symbols-outlined text-white dark:text-on-surface text-[14px] md:text-[18px]">
                    gesture
                  </span>
                  <span className="font-label-caps text-white dark:text-on-surface text-[8px] md:text-[10px]">
                    SWIPE TO ROTATE
                  </span>
                </div>
                <div className="w-px h-3 md:h-4 bg-white/20 dark:bg-outline-variant/30"></div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="material-symbols-outlined text-white dark:text-on-surface text-[14px] md:text-[18px]">
                    pinch
                  </span>
                  <span className="font-label-caps text-white dark:text-on-surface text-[8px] md:text-[10px]">
                    PINCH TO ZOOM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
