import { NextResponse } from 'next/server';
import treatments from '@/data/treatments.json';

export async function GET() {
    // Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(treatments);
}
