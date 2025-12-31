import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import ContactSubmission from '@/models/ContactSubmission';
import { verifySession } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('admin_token')?.value;
        const session = await verifySession(token);

        if (!session) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const submissions = await ContactSubmission.find({}).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: submissions }, { status: 200 });
    } catch (error) {
        console.error('Fetch submissions error:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
