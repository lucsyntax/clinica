"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Zap, CheckCircle2 } from "lucide-react";
import { scrollToSection } from "@/utils/scrollTo";

const benefits = [
  {
    title: "Transformação Estética",
    description: "Sorrisos desenhados digitalmente para harmonizar perfeitamente com os traços do seu rosto.",
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: "bg-primary/10 text-primary",
  },
  {
    title: "Saúde Integral",
    description: "A saúde bucal é a base sólida para o bem-estar de todo o seu corpo. Cuide-se por completo.",
    icon: <Heart className="w-6 h-6" />,
    iconBg: "bg-accent/15 text-accent-hover",
  },
  {
    title: "Tecnologia de Ponta",
    description: "Precisão absoluta com scanners 3D e impressão digital para tratamentos mais rápidos e confortáveis.",
    icon: <Zap className="w-6 h-6" />,
    iconBg: "bg-cta/10 text-cta",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-hover font-bold tracking-widest text-xs uppercase mb-3 block">
            Por que nos escolher
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6 tracking-tight">
            Mais que um sorriso, <br />
            <span className="text-primary">uma nova vida.</span>
          </h2>
          <p className="text-text-medium text-lg leading-relaxed">
            Unimos arte, ciência e tecnologia para entregar resultados que superam expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-bg-subtle/30 border border-border-subtle hover:border-primary/20 hover:shadow-soft transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-full ${benefit.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3 text-pretty">
                {benefit.title}
              </h3>
              <p className="text-text-medium leading-relaxed mb-6">
                {benefit.description}
              </p>
              
              <button 
                onClick={() => scrollToSection("agendamento")}
                className="flex items-center gap-2 text-sm font-medium text-primary-light group-hover:text-primary transition-colors cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Saiba mais</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
