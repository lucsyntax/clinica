import { NextResponse } from 'next/server';
import { z } from 'zod';

const bookingSchema = z.object({
    name: z.string().min(3),
    phone: z.string().min(10),
    type: z.enum(["Avaliação", "Retorno", "Emergência"]),
    notes: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = bookingSchema.parse(body);

        // Simulate backend processing
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("📝 Nova Solicitação de Agendamento:", validatedData);

        return NextResponse.json({
            success: true,
            message: "Agendamento recebido com sucesso!",
            id: Math.random().toString(36).substr(2, 9)
        });
    } catch {
        return NextResponse.json(
            { success: false, message: "Dados inválidos" },
            { status: 400 }
        );
    }
}
