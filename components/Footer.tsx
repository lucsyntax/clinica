"use client";

import Link from "next/link";
import { Instagram, MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text pt-24 pb-8 relative overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl">V</div>
              <span className="text-2xl font-serif font-bold text-white tracking-wide">VIVANT</span>
            </div>
            <p className="text-footer-muted mb-8 text-sm leading-relaxed max-w-xs">
              Redefinindo a odontologia com tecnologia de ponta e cuidado humanizado. Sua saúde e autoestima em primeiro lugar.
            </p>
            <div className="flex gap-4">
               <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white cursor-pointer transition-colors text-footer-muted no-underline border border-white/5"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366]/20 hover:text-[#25D366] cursor-pointer transition-colors text-footer-muted no-underline border border-white/5"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-primary-light font-bold mb-6 text-sm uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-4 text-footer-muted text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="#tratamentos" className="hover:text-white transition-colors">Tratamentos</Link></li>
              <li><Link href="#clinica" className="hover:text-white transition-colors">A Clínica</Link></li>
              <li><Link href="#equipe" className="hover:text-white transition-colors">Nossa Equipe</Link></li>
              <li><Link href="#agendamento" className="hover:text-white transition-colors">Agendamento</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-primary-light font-bold mb-6 text-sm uppercase tracking-widest">Contato</h4>
            <ul className="space-y-4 text-footer-muted text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>(11) 3232-0000</span>
              </li>
               <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>contato@vivant.com.br</span>
              </li>
            </ul>
          </div>
          
          {/* Hours Column */}
          <div>
            <h4 className="text-primary-light font-bold mb-6 text-sm uppercase tracking-widest">Horários</h4>
            <ul className="space-y-4 text-footer-muted text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <div>
                  <p className="text-white font-medium">Segunda a Sexta</p>
                  <p>08:00 - 20:00</p>
                </div>
              </li>
               <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <div>
                  <p className="text-white font-medium">Sábado</p>
                  <p>09:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-footer-muted">
          <p>&copy; 2024 VIVANT Clínica Odontológica. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/termos" className="hover:text-white">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-white">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
