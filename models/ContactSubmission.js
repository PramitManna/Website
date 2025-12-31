import mongoose from 'mongoose';

const ContactSubmissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        maxlength: [100, 'Email cannot be more than 100 characters'],
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number cannot be more than 20 characters'],
    },
    role: {
        type: String,
        maxlength: [50, 'Role cannot be more than 50 characters'],
    },
    interests: {
        type: [String],
        default: [],
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
        maxlength: [2000, 'Message cannot be more than 2000 characters'],
    },
    contactTime: {
        type: String,
        maxlength: [100, 'Contact time cannot be more than 100 characters'],
    },
    read: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

export default mongoose.models.ContactSubmission || mongoose.model('ContactSubmission', ContactSubmissionSchema);
