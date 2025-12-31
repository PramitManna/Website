"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/features/Chatbot";
import { Button } from "@/components/ui/Button";
import { Input, Select, Checkbox } from "@/components/ui/Input";
import { Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/Motion";

import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            role: formData.get("role"),
            interests: formData.getAll("interests"), // Checkbox handling might need adjustment depending on component
            message: formData.get("message"),
            contactTime: formData.get("contactTime")
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.error || "Something went wrong");

            setStatus({ loading: false, success: true, error: null });
            e.target.reset();
        } catch (error) {
            setStatus({ loading: false, success: false, error: error.message });
        }
    }
    return (
        <main className="min-h-screen flex flex-col bg-neutral-50 overflow-x-hidden">
            <Navbar />

            <section className="pt-40 pb-24">
                <div className="container mx-auto px-6 md:px-12">
                    <FadeIn className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 overflow-hidden flex flex-col lg:flex-row border border-neutral-100">

                        {/* Contact Form */}
                        <div className="lg:w-3/5 p-12 lg:p-20">
                            <SlideUp delay={0.2}>
                                <h2 className="mb-4">Let’s Talk About Your Next Level</h2>
                                <p className="text-neutral-600 mb-12 font-light text-lg">
                                    Tell us where you are now, where you want to go, and we’ll help you design the path.
                                </p>
                            </SlideUp>

                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-primary-900 uppercase tracking-wider ml-1">Full Name</label>
                                        <Input name="name" placeholder="e.g. Jane Cooper" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-primary-900 uppercase tracking-wider ml-1">Email Address</label>
                                        <Input name="email" type="email" placeholder="jane@company.com" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wider ml-1">Phone (Optional)</label>
                                    <Input name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wider ml-1">I am a...</label>
                                    <Select name="role">
                                        <option>Student / Recent Graduate</option>
                                        <option>Professional / Manager</option>
                                        <option>HR / L&D / Leadership</option>
                                        <option>Other</option>
                                    </Select>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wider ml-1">Area of Interest</label>
                                    <div className="grid grid-cols-1 gap-3">
                                        {[
                                            "ELV8S Core – Workplace Readiness",
                                            "ELV8S AI – Working Smarter with AI",
                                            "ELV8S Finance – Certifications & Careers",
                                            "Custom / Corporate Program"
                                        ].map((item) => (
                                            <label key={item} className="flex items-center space-x-3 cursor-pointer group p-3 rounded-xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100">
                                                <Checkbox name="interests" value={item} />
                                                <span className="text-sm text-neutral-700 font-medium group-hover:text-primary-900 transition-colors">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wider ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        className="flex min-h-[120px] w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-5 py-4 text-base ring-offset-white placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900/10 focus-visible:border-primary-900 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 resize-none"
                                        placeholder="Brief description of your goals..."
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary-900 uppercase tracking-wider ml-1">Preferred Contact Time (Optional)</label>
                                    <Input name="contactTime" placeholder="e.g. Weekday mornings" />
                                </div>

                                {status.error && (
                                    <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm">
                                        {status.error}
                                    </div>
                                )}

                                {status.success && (
                                    <div className="p-4 rounded-xl bg-green-50 text-green-600 text-sm">
                                        Message sent successfully! We'll be in touch soon.
                                    </div>
                                )}

                                <Button type="submit" size="lg" className="w-full shadow-xl shadow-primary-900/10 hover:scale-[1.02] transition-transform" disabled={status.loading}>
                                    {status.loading ? 'Sending...' : 'Submit'} <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </form>
                        </div>

                        {/* Side Panel */}
                        <div className="lg:w-2/5 bg-primary-950 text-white p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-start/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse duration-[8000ms]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 animate-pulse duration-[6000ms]" />
                            {/* Evenly spaced content without middle card */}
                            <div className="relative z-10 flex flex-col justify-evenly h-full">
                                {/* Top: Quick Contact */}
                                <div>
                                    <h3 className="text-white text-2xl mb-10 font-serif">Quick Contact Info</h3>
                                    <ul className="space-y-8">
                                        <li className="flex items-start space-x-6 group">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-500 group-hover:border-accent-500 transition-all duration-300">
                                                <Mail className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
                                                <p className="font-medium text-lg text-white">info@elv8s.com</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-6 group">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-500 group-hover:border-accent-500 transition-all duration-300">
                                                <MapPin className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Locations</p>
                                                <div className="space-y-4">
                                                    <div>
                                                        <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Canada</p>
                                                        <p className="font-medium text-lg text-white">Toronto, Vancouver</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-white/60 uppercase tracking-wider mb-1">USA</p>
                                                        <p className="font-medium text-lg text-white">New Jersey</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-white/60 mt-4">(Serving clients virtually worldwide)</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Bottom: Chat section */}
                                <div className="pt-12 mt-8 border-t border-white/10">
                                    <h4 className="text-white text-xl mb-6">Chat Live With ELV8S</h4>
                                    <p className="text-white/70 mb-6 font-light">
                                        Prefer quick answers? Use our chatbot to ask about pricing, formats, or choosing a track.
                                    </p>
                                    <div className="flex items-center gap-3 text-accent-500 text-sm font-bold uppercase tracking-wider">
                                        <MessageSquare className="w-4 h-4" />
                                        <span>Open Chatbot Bottom Right</span>
                                    </div>
                                    <p className="text-white/40 text-xs mt-4 italic">
                                        Type: "Help me pick a program."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
            <Chatbot />
        </main>
    );
}
