"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Calendar, CheckCircle, Smartphone, User, ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Define interfaces for form data if needed in real app
  interface FormData {
    name: string;
    whatsapp: string;
    treatment: string;
  }

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating submission
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center border border-accent/20">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-text-dark mb-2">Agendamento Solicitado!</h3>
        <p className="text-text-medium mb-6">
          Nossa equipe de concierge entrará em contato via WhatsApp em instantes para confirmar seu horário.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-primary font-bold hover:underline cursor-pointer"
        >
          Novo agendamento
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-white/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-dark mb-2">Agende sua Avaliação</h3>
        <p className="text-text-medium text-sm">
          Preencha os dados abaixo para um atendimento <span className="text-primary font-bold">personalizado</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="relative">
          <div className="absolute left-4 top-3.5 text-text-light pointer-events-none">
            <User className="w-5 h-5" />
          </div>
          <input
            {...register("name", { required: true })}
            placeholder="Seu nome completo"
            className="w-full pl-12 pr-4 py-3.5 bg-bg-subtle/30 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none text-text-dark placeholder:text-text-light/70"
          />
          {errors.name && <span className="text-red-500 text-xs mt-1 ml-2">Campo obrigatório</span>}
        </div>

        <div className="relative">
          <div className="absolute left-4 top-3.5 text-text-light pointer-events-none">
            <Smartphone className="w-5 h-5" />
          </div>
          <input
            {...register("whatsapp", { required: true })}
            placeholder="Seu WhatsApp (com DDD)"
            type="tel"
            className="w-full pl-12 pr-4 py-3.5 bg-bg-subtle/30 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none text-text-dark placeholder:text-text-light/70"
          />
          {errors.whatsapp && <span className="text-red-500 text-xs mt-1 ml-2">Campo obrigatório</span>}
        </div>
        
        <div className="relative">
          <div className="absolute left-4 top-3.5 text-text-light pointer-events-none">
             <Calendar className="w-5 h-5" />
          </div>
          <select 
             {...register("treatment")}
             className="w-full pl-12 pr-4 py-3.5 bg-bg-subtle/30 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none text-text-dark appearance-none cursor-pointer"
             defaultValue=""
          >
             <option value="" disabled>Interesse principal</option>
             <option value="clareamento">Clareamento Dental</option>
             <option value="lentes">Lentes de Contato</option>
             <option value="invisalign">Invisalign / Ortodontia</option>
             <option value="implantes">Implantes</option>
             <option value="checkup">Check-up Geral</option>
             <option value="kids">Odontopediatria</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={clsx(
            "w-full py-4 rounded-xl font-bold uppercase tracking-wide text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer",
            isSubmitting 
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-cta hover:bg-cta-hover text-white"
          )}
        >
          {isSubmitting ? "Enviando..." : "Solicitar Horário"}
          {!isSubmitting && <ArrowRight className="w-5 h-5" />}
        </button>
        
        <p className="text-center text-xs text-text-light pt-2">
          Seus dados estão seguros. Não enviamos spam.
        </p>
      </form>
    </div>
  );
}
