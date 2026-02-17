"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/utils/scrollTo";

export interface Treatment {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
}

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden bg-bg-muted">
        {treatment.image ? (
          <Image
            src={treatment.image}
            alt={treatment.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-light text-sm">
             Imagem indisponível
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001B48]/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-text-dark shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {treatment.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative">
        <h3 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">
          {treatment.title}
        </h3>
        <p className="text-text-medium leading-relaxed mb-8 flex-grow">
          {treatment.description}
        </p>
        
        <div className="flex items-center justify-between border-t border-border pt-6 mt-auto">
          <span className="text-sm font-bold text-text-light uppercase tracking-wide group-hover:text-text-dark transition-colors">
            Saiba mais
          </span>
          <button 
            onClick={() => scrollToSection("agendamento")}
            className="w-12 h-12 rounded-full bg-bg-subtle flex items-center justify-center text-primary group-hover:bg-cta group-hover:text-white transition-all duration-300 transform group-hover:rotate-45"
          >
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
