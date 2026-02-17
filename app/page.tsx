import Header from "@/components/Header";
import HeroVideoMask from "@/components/HeroVideoMask";
import TreatmentGrid from "@/components/TreatmentGrid";
import BookingForm from "@/components/BookingForm";
import BenefitsSection from "@/components/BenefitsSection";
import FamilySection from "@/components/FamilySection";
import Footer from "@/components/Footer";
import KidsSection from "@/components/KidsSection";
import ClinicaSection from "@/components/ClinicaSection";
import TeamSection from "@/components/TeamSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getTreatments, getDoctors } from "@/utils/api";
import { Car, Smartphone, Sparkles, Scan } from "lucide-react";

export default async function Home() {
  const treatments = await getTreatments();
  const doctors = await getDoctors();

  return (
    <main className="min-h-screen bg-bg-page selection:bg-accent/30 text-text-dark font-sans">
      <Header />
      <HeroVideoMask />
      
      {/* Treatments Section */}
      <section id="tratamentos" className="py-24 relative bg-white border-b border-border/50">
        <div className="container mx-auto px-6 mb-16 text-center relative z-10">
          <span className="text-accent-hover font-bold tracking-widest text-xs uppercase mb-3 block">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-6 tracking-tight">
            Excelência <span className="text-primary">Estética</span>
          </h2>
          <p className="text-text-medium max-w-2xl mx-auto text-lg leading-relaxed">
            Protocolos minimamente invasivos planejados digitalmente para preservar a beleza natural do seu sorriso.
          </p>
        </div>
        <TreatmentGrid treatments={treatments} />
      </section>

      {/* Kids Section - Soft Blue Theme */}
      <KidsSection />

      {/* Benefits - White */}
      <BenefitsSection />
      
      {/* Family - White */}
      <FamilySection />

      {/* A Clínica Section - Subtle Blue */}
      <ClinicaSection />

      {/* Equipe Section - Subtle Blue */}
      <TeamSection doctors={doctors} />

      {/* Booking Section - White with Gradient Border */}
      <section id="agendamento" className="py-24 relative overflow-hidden bg-white">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="text-accent-hover font-bold tracking-widest text-xs uppercase mb-3 block">Conforto &amp; Cuidado</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-dark mb-8 max-w-md">
              Atendimento <span className="text-primary italic">Exclusivo</span>
            </h2>
            <p className="text-text-medium mb-10 text-lg leading-relaxed">
              Do estacionamento cortesia à sala de relaxamento com aromaterapia. Redefinimos a experiência odontológica para que você se sinta acolhido.
            </p>

            <ul className="space-y-6">
              {[
                { title: "Estacionamento Gratuito", icon: <Car className="w-6 h-6" strokeWidth={1.5} /> },
                { title: "Check-in Digital", icon: <Smartphone className="w-6 h-6" strokeWidth={1.5} /> },
                { title: "Sala de Relaxamento", icon: <Sparkles className="w-6 h-6" strokeWidth={1.5} /> },
                { title: "Raio-X Digital na Sala", icon: <Scan className="w-6 h-6" strokeWidth={1.5} /> }
              ].map((item) => (
                <li key={item.title} className="flex items-center gap-5 p-4 rounded-2xl border border-border/50 hover:bg-bg-subtle transition-all cursor-default group hover:border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-text-dark font-bold">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
             <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
