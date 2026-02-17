"use client";

import { useState } from "react";
import TreatmentCard, { Treatment } from "./TreatmentCard";
import clsx from "clsx";

export default function TreatmentGrid({ treatments }: { treatments: Treatment[] }) {
  const [filter, setFilter] = useState("Todos");
  
  // Extract unique categories from treatments, or use default list
  const categories = ["Todos", "Estética", "Ortodontia", "Cirurgia", "Prevenção"];

  const filteredTreatments = filter === "Todos" 
    ? treatments 
    : treatments.filter(t => t.category === filter);

  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={clsx(
              "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer border border-transparent",
              filter === cat 
                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" 
                : "bg-bg-subtle text-text-medium hover:bg-white hover:border-primary/20 hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTreatments.map((treatment) => (
          <TreatmentCard key={treatment.id} treatment={treatment} />
        ))}
      </div>
    </div>
  );
}
