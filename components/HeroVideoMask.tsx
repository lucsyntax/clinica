"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { scrollToSection } from "@/utils/scrollTo";

export default function HeroVideoMask() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="/images/hero-dental-trust.png"
          alt="Sorriso radiante e saudável"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        
        {/* Modern Gradient Overlay - Deep Navy to Transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B48]/90 via-[#001B48]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001B48] via-transparent to-transparent opacity-80" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">Odontologia de Alta Performance</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Seu sorriso merece <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">perfeição.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-light">
              Tecnologia digital avançada e cuidado humanizado para transformar sua saúde e autoestima em uma experiência única.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button 
                onClick={() => scrollToSection("agendamento")}
                className="group bg-cta hover:bg-cta-hover text-white font-bold px-10 py-5 rounded-full shadow-glow transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 uppercase tracking-wide text-sm cursor-pointer"
              >
                Agendar Avaliação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#001B48] bg-white overflow-hidden relative">
                       <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Paciente" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-white">
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    5.0 <div className="flex"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                  </div>
                  <div className="text-xs text-white/60">mais de 2.000 sorrisos</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
