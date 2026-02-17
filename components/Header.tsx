"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/utils/scrollTo";

const navLinks = [
  { label: "Tratamentos", href: "tratamentos" },
  { label: "A Clínica", href: "clinica" },
  { label: "Equipe", href: "equipe" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const handleNav = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={clsx(
          "container mx-auto px-6 transition-all duration-300",
          isScrolled 
            ? "max-w-5xl" 
            : "max-w-7xl"
        )}>
          <div className={clsx(
            "rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300",
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-soft border border-white/40"
              : "bg-transparent"
          )}>
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
               <div className={clsx(
                 "w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-xl transition-colors",
                 isScrolled ? "bg-primary text-white" : "bg-white text-primary"
               )}>
                 V
               </div>
               <span className={clsx(
                 "text-xl font-serif font-bold tracking-wide transition-colors",
                 isScrolled ? "text-text-dark" : "text-white"
               )}>
                 VIVANT
               </span>
            </Link>

            {/* Desktop Nav */}
            <nav className={clsx(
              "hidden md:flex gap-8 text-sm font-medium transition-colors",
              isScrolled ? "text-text-medium" : "text-white/90"
            )}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="hover:text-primary-light transition-colors cursor-pointer bg-transparent border-none"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* CTA — Bright Blue */}
              <button 
                onClick={() => scrollToSection("agendamento")}
                className={clsx(
                  "hidden sm:block font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 tracking-wide uppercase cursor-pointer",
                  isScrolled 
                    ? "bg-cta text-cta-text hover:bg-cta-hover" 
                    : "bg-white text-primary hover:bg-primary-light hover:text-white"
                )}
              >
                Agendar Consulta
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={clsx(
                  "md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer",
                  isScrolled
                    ? "bg-bg-subtle text-primary"
                    : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                )}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#001B48]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleNav(link.href)}
                className="text-white text-3xl font-serif font-bold hover:text-cta transition-colors cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => handleNav("agendamento")}
              className="mt-8 px-10 py-4 bg-cta text-white rounded-full font-bold text-lg uppercase tracking-wide cursor-pointer hover:bg-cta-hover transition-colors shadow-glow"
            >
              Agendar Consulta
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
