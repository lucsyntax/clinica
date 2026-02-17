export interface AvailabilitySlot {
    date: string;
    time: string;
    available: boolean;
}

// Mock database of availability (Next 3 days)
export const getAvailableSlots = async (days: number = 3): Promise<AvailabilitySlot[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const slots: AvailabilitySlot[] = [];
    const today = new Date();

    for (let i = 0; i < days; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);
        const dateStr = currentDate.toISOString().split("T")[0];

        // Mock hours 09:00 to 17:00
        const hours = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

        hours.forEach((time) => {
            // Randomly assign availability
            const isAvailable = Math.random() > 0.3;
            slots.push({
                date: dateStr,
                time,
                available: isAvailable,
            });
        });
    }

    return slots;
};

export const bookSlot = async (slot: AvailabilitySlot, patientData: unknown): Promise<boolean> => {
    console.log("Booking Mock:", slot, patientData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true; // Always succeed in mock
};
