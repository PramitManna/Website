"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/features/Chatbot";
import { FadeIn, SlideUp } from "@/components/ui/Motion";
import { Quote } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-10 border-b border-neutral-100">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <SlideUp>
                        <h1 className="mb-6 text-balance">About the Founder</h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Bridging the gap between academic theory and corporate reality.
                        </p>
                    </SlideUp>
                </div>
            </section>

            {/* Bio Section */}
            <section className="pt-10 pb-24">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Image Side */}
                        <div className="lg:col-span-5">
                            <FadeIn>
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-900/10 border border-neutral-100 aspect-[4/5]">
                                    <img
                                        src="/images/VaibhavPhoto.jpeg"
                                        alt="Vaibhav Kesri"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
                                </div>
                            </FadeIn>
                        </div>

                        {/* Content Side */}
                        <div className="lg:col-span-7">
                            <SlideUp delay={0.2}>
                                <h2 className="text-4xl font-heading font-bold text-primary-900 mb-8">
                                    Vaibhav Kesri <span className="text-primary-900/40 font-light">(Vaib)</span>
                                </h2>

                                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
                                    <p>
                                        Vaibhav Kesri is a seasoned Delivery and Governance Specialist with over 18 years of experience leading complex, large-scale business and technology transformations.
                                    </p>
                                    <p>
                                        Having led teams across 10 industries in North America, Europe, and Asia and managed high-stakes programs for multiple Fortune 500 companies, Vaib possesses a deep understanding of what it takes for young professionals to thrive in high-pressure corporate environments.
                                    </p>
                                    <p>
                                        He has mentored countless new joiners through their first days in intense and challenging workplaces, helping them navigate the unwritten rules of the corporate world.
                                    </p>
                                </div>

                                <div className="mt-12 p-8 bg-neutral-50 rounded-3xl border border-neutral-100 relative">
                                    <Quote className="w-10 h-10 text-accent-500 absolute -top-5 -left-2 bg-white rounded-full p-2 shadow-sm border border-neutral-100" />
                                    <p className="text-primary-900 font-medium italic text-xl leading-relaxed">
                                        "My mission is to equip the next generation of leaders with the practical tools and mindset they need to not just survive, but excel from day one."
                                    </p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Chatbot />
        </main>
    );
}
