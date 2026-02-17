"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

// Matches utils/api.ts
interface Doctor {
  id: string;
  name: string;
  cro: string;
  bio: string;
  specialties: string[];
  photoUrl: string;
}

interface TeamSectionProps {
  doctors: Doctor[];
}

export default function TeamSection({ doctors }: TeamSectionProps) {
  // Fallback if no doctors provided
  const team = doctors && doctors.length > 0 ? doctors : [
    {
      id: "1",
      name: "Dr. Rafael Silva",
      specialties: ["Implantodontista"],
      cro: "CRO-SP 12345",
      photoUrl: "/images/dr-rafael.png",
      bio: "Especialista em reabilitação oral e estética do sorriso com mais de 10 anos de experiência."
    },
    {
      id: "2",
      name: "Dra. Elisa Santos",
      specialties: ["Ortodontista"],
      cro: "CRO-SP 67890",
      photoUrl: "/images/dra-elisa.png",
      bio: "Mestre em Ortodontia e especialista em Invisalign Doctor Provider."
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-bg-section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-hover font-bold tracking-widest text-xs uppercase mb-3 block">
            Corpo Clínico
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6">
            Especialistas em <br />
            <span className="text-primary">sorrisos perfeitos.</span>
          </h2>
          <p className="text-text-medium text-lg">
            Uma equipe multidisciplinar em constante atualização para oferecer o que há de mais moderno na odontologia mundial.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((doctor, index) => (
            <motion.div
              key={doctor.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-border group hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-80 bg-[#E8F1F5]">
                 <Image 
                   src={doctor.photoUrl} 
                   alt={doctor.name} 
                   fill 
                   className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#001B48]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                   <div className="flex gap-4">
                     <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors cursor-pointer">
                       <Instagram className="w-5 h-5" />
                     </button>
                     <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors cursor-pointer">
                       <Linkedin className="w-5 h-5" />
                     </button>
                   </div>
                 </div>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-text-dark mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium text-sm mb-3 uppercase tracking-wide">
                  {doctor.specialties && doctor.specialties.length > 0 ? doctor.specialties[0] : "Dentista"}
                </p>
                <div className="inline-block px-3 py-1 bg-bg-subtle rounded-full text-xs font-mono text-text-light mb-4 border border-border">
                  {doctor.cro}
                </div>
                <p className="text-text-medium text-sm leading-relaxed line-clamp-3">
                  {doctor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
