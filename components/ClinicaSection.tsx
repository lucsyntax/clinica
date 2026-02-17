"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wifi, Trophy, Coffee, Clock } from "lucide-react";
import { scrollToSection } from "@/utils/scrollTo";

const differentials = [
  { icon: <Clock className="w-6 h-6" />, title: "Pontualidade", text: "Seu tempo é valioso. Respeitamos rigorosamente os horários.", color: "bg-primary/10 text-primary" },
  { icon: <Trophy className="w-6 h-6" />, title: "Excelência", text: "Materiais importados e protocolos internacionais.", color: "bg-cta/10 text-cta" },
  { icon: <Wifi className="w-6 h-6" />, title: "Conectividade", text: "Wi-Fi de alta velocidade e tablets para entretenimento.", color: "bg-accent/15 text-accent-hover" },
  { icon: <Coffee className="w-6 h-6" />, title: "Conforto", text: "Café premium e ambiente climatizado com aromaterapia.", color: "bg-primary/10 text-primary" }
];

export default function ClinicaSection() {
  return (
    <section id="clinica" className="py-24 bg-bg-surface relative">
      <div className="container mx-auto px-6">
        
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: "15+", label: "Anos de Experiência" },
            { value: "12k+", label: "Pacientes Atendidos" },
            { value: "100%", label: "Biosegurança" },
            { value: "4.9", label: "Avaliação Google" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-bg-subtle/30 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-text-medium font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
             <Image 
               src="/images/limpeza.jpg" 
               alt="Consultório VIVANT" 
               fill 
               className="object-cover hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#001B48]/80 to-transparent flex items-end p-10">
               <div className="text-white">
                 <h3 className="text-2xl font-bold mb-2">Ambiente Acolhedor</h3>
                 <p className="opacity-90">Design pensado para reduzir a ansiedade e promover o bem-estar.</p>
               </div>
             </div>
          </div>
          
          <div>
            <span className="text-accent-hover font-bold tracking-widest text-xs uppercase mb-3 block">
              Nossa Estrutura
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-8">
              Tecnologia e <br />
              <span className="text-primary">conforto absoluto.</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {differentials.map((item, index) => (
                <div key={index} className="group">
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-colors ${item.color}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-text-dark mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-medium text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
