import treatmentsData from "@/data/treatments.json";
import doctorsData from "@/data/doctors.json";

// Types matching data/treatments.json
export interface Treatment {
    id: string;
    title: string;
    description: string;
    category: string;
    durationMinutes: number;
    priceRange: string;
    icon: string;
    image?: string;
}

export interface Doctor {
    id: string;
    name: string;
    cro: string;
    bio: string;
    specialties: string[];
    photoUrl: string;
}

// Accessors (Simulate Async DB)
export const getTreatments = async (): Promise<Treatment[]> => {
    return treatmentsData as Treatment[];
};

export const getDoctors = async (): Promise<Doctor[]> => {
    return doctorsData as Doctor[];
};
