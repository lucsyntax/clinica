"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Shield, Users } from "lucide-react";
import { scrollToSection } from "@/utils/scrollTo";

export default function FamilySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-6">
              <Users className="w-3 h-3" />
            </span>
            <span className="text-primary font-bold text-xs uppercase tracking-wider mb-6 block">
              Cuidado para toda família
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6 leading-tight">
              Prevenção e cuidado <br />
              <span className="text-primary relative inline-block">
                para todos.
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/20 -z-10 skew-x-12" />
              </span>
            </h2>
            
            <p className="text-text-medium text-lg mb-8 leading-relaxed">
              Acreditamos que o hábito de cuidar do sorriso deve ser compartilhado. Oferecemos planos preventivos personalizados para cada fase da vida da sua família.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-bg-subtle/50 border border-border flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold text-text-dark mb-1">Check-up Preventivo</h4>
                <p className="text-sm text-text-light">Acompanhamento semestral completo.</p>
              </div>
              <div className="p-5 rounded-2xl bg-bg-subtle/50 border border-border flex flex-col items-center text-center">
                <Heart className="w-8 h-8 text-cta" />
                <h4 className="font-bold text-text-dark mb-1">Planos Familiares</h4>
                <p className="text-sm text-text-light">Condições especiais para grupos.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("agendamento")}
                className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary-hover transition-colors cursor-pointer"
              >
                Conhecer Planos
              </button>
              <button 
                onClick={() => scrollToSection("equipe")}
                className="px-8 py-3 bg-transparent border border-primary/20 text-primary rounded-full font-bold hover:bg-primary/5 transition-colors cursor-pointer"
              >
                Conhecer Equipe
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full aspect-square max-w-[500px]">
             {/* Abstract Heart Shape */}
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="relative w-full h-full flex items-center justify-center"
             >
                <div className="absolute inset-0 bg-[#D6E8EE] rounded-[3rem] rotate-3 transform origin-center" />
                <div className="absolute inset-4 bg-white rounded-[2.5rem] -rotate-2 overflow-hidden shadow-xl border border-white/50 flex items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/20 flex items-center justify-center">
                      <Image 
                        src="/images/coracao.png" 
                        alt="Coração" 
                        width={200} 
                        height={200} 
                        className="opacity-50 drop-shadow-xl object-contain"
                      />
                   </div>
                   
                   {/* Floating Stats Card */}
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.3 }}
                     className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-lg border border-border/50 max-w-[200px]"
                   >
                     <div className="flex items-center gap-2 mb-1">
                       <span className="text-2xl font-bold text-primary">850+</span>
                       <Heart className="w-5 h-5 text-red-400 fill-red-400" />
                     </div>
                     <p className="text-xs text-text-medium font-medium">Famílias cuidadas com carinho</p>
                   </motion.div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
