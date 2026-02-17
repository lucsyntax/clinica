"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CloudSun, Smile, Star, Heart } from "lucide-react";
import { scrollToSection } from "@/utils/scrollTo";

export default function KidsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-section-alt">
      {/* Background Blobs - Soft Blue Tints */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="col-span-2 relative h-64 rounded-3xl overflow-hidden shadow-soft border-4 border-white rotate-1"
              >
                 <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-accent">
                   <CloudSun className="w-6 h-6" />
                 </div>
                 <Image src="/kids-group.png" alt="Crianças sorrindo" fill className="object-cover" />
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative h-48 rounded-3xl overflow-hidden shadow-soft border-4 border-white -rotate-2"
              >
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-primary-light">
                   <Smile className="w-6 h-6" />
                 </div>
                <Image src="/kids-circle.png" alt="Criança consulta" fill className="object-cover" />
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="relative h-48 rounded-3xl overflow-hidden shadow-soft border-4 border-white rotate-2 bg-accent/20 flex items-center justify-center p-6"
              >
                 <Image src="/kids-portrait.png" alt="Odontopediatria" fill className="object-cover opacity-90" />
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold text-text-dark">Super Coragem</span>
                    </div>
                 </div>
              </motion.div>
            </div>
            
            {/* Decorative background circle */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10 scale-125" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-accent-hover font-bold tracking-widest text-xs uppercase mb-3 block">
              Odontopediatria Lúdica
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6 leading-tight">
              Cuidando dos <br />
              <span className="text-primary-light">pequenos sorrisos</span>
            </h2>
            <p className="text-text-medium text-lg leading-relaxed mb-8 text-balance">
              Transformamos a ida ao dentista em uma aventura divertida. Nossos especialistas sabem exatamente como acolher e encantar.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Ambiente adaptado e acolhedor",
                "Técnicas de manejo comportamental",
                "Prevenção e educação divertida"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent-hover">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-text-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("agendamento")}
              className="px-8 py-4 bg-cta text-white rounded-full font-bold shadow-glow hover:bg-cta-hover transition-colors flex items-center gap-2 uppercase tracking-wide text-sm cursor-pointer"
            >
              Agendar Consultinha <Heart className="w-4 h-4 fill-current" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}

import { CheckCircle2 } from "lucide-react";
