import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import ContactSubmission from '@/models/ContactSubmission';

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { success: false, error: 'Please provide all required fields' },
                { status: 400 }
            );
        }

        // Update existing submission if email exists, otherwise create new
        const submission = await ContactSubmission.findOneAndUpdate(
            { email: body.email },
            body,
            { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
        );

        // TODO: Send email notification to admin
        // console.log('New submission:', submission);

        return NextResponse.json({ success: true, data: submission }, { status: 201 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
