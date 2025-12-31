import { NextResponse } from 'next/server';

export async function GET() {
    console.log("--- DEBUG ENV VARS ---");
    console.log("PWD:", process.env.PWD);
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
    console.log("ADMIN_PASSWORD_HASH length:", process.env.ADMIN_PASSWORD_HASH ? process.env.ADMIN_PASSWORD_HASH.length : "UNDEFINED");
    console.log("ADMIN_PASSWORD_HASH first char:", process.env.ADMIN_PASSWORD_HASH ? process.env.ADMIN_PASSWORD_HASH.charAt(0) : "N/A");

    return NextResponse.json({
        email: process.env.ADMIN_EMAIL,
        hashLength: process.env.ADMIN_PASSWORD_HASH ? process.env.ADMIN_PASSWORD_HASH.length : 0
    });
}
