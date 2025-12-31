"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/features/Chatbot";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight, Sparkles, BarChart3, BookOpen, Layers } from "lucide-react";
import { FadeIn, SlideUp, ScaleIn } from "@/components/ui/Motion";

export default function Programs() {
    const programs = [
        {
            id: "core",
            title: "The Corporate Launchpad",
            subtitle: "Workplace Readiness Intensive (2–3 Days)",
            description: "The definitive guide to corporate navigation. Bridge the gap between academic theory and the unwritten rules of the boardroom.",
            whoFor: "Students, new hires, career switchers, and professionals who want a solid foundation in how modern workplaces operate.",
            features: [
                "Workplace Culture & Unwritten Rules",
                "Professional Communication",
                "Strategic Time & Stakeholder Management",
                "The AI-Powered Workflow",
                "Navigating Conflict & Feedback",
                "A 30-60-90 Days Plan to ensure success "
            ],
            outcomes: [
                "Day One Readiness: You will walk into your first day with the clarity and confidence to navigate any corporate environment.",
                "Business Impact Awareness: You will gain a deep understanding of how your individual role contributes to the company’s bottom line and larger goals.",
                "Enhanced Influence: You will communicate with a level of professionalism and persuasion that earns the respect of senior colleagues.",
                "Relationship Excellence: You will possess the tools to build strong, collaborative working relationships and professional networks from the start."
            ],
            cta: "Enquire About The Corporate Launchpad",
            icon: BookOpen,
            theme: "from-blue-500/20 to-blue-900/5"
        },
        {
            id: "ai",
            title: "ELV8S AI",
            subtitle: "Working Smarter with AI (1–2 Days)",
            description: "Partner with intelligence. A rigorous curriculum on integrating generative AI into workflows to amplify output and creativity.",
            whoFor: "Professionals, students, entrepreneurs, and teams who want to integrate AI into their everyday work.",
            features: [
                "How AI is changing work, decision-making, and value creation",
                "Practical use cases: drafting, research, summarizing, planning",
                "How to design effective prompts and instructions",
                "Building simple AI-assisted workflows for your role",
                "Risks, limitations, and responsible use of AI"
            ],
            outcomes: [
                "Understand where AI fits into their daily tasks",
                "Be able to use AI tools confidently and responsibly",
                "Work faster and with more creative options",
                "Position themselves as forward-looking contributors"
            ],
            cta: "Talk to Us About ELV8S AI",
            icon: Sparkles,
            theme: "from-purple-500/20 to-purple-900/5"
        },
        {
            id: "finance",
            title: "ELV8S Finance",
            subtitle: "Certifications & Career Pathways",
            description: "Technical mastery for the modern financier. From modeling to market analysis, designed for high-trajectory careers.",
            whoFor: "People who are in, or want to enter, finance, banking, investment, or related fields and need clarity and structure.",
            features: [
                "Overview of key roles and career paths in financial services",
                "Mapping certifications to roles and goals (CFA, CSI, CIRO)",
                "Study planning and exam strategy",
                "Core technical areas: Financial analysis, modeling, capital markets",
                "Professional skills: Structured thinking, communicating insights"
            ],
            outcomes: [
                "Have a clear roadmap for building a career in finance or banking",
                "Know which certifications make sense for their goals",
                "Be better prepared to balance work and study",
                "Build both technical and professional skills needed for progression"
            ],
            cta: "Book a Call for ELV8S Finance",
            icon: BarChart3,
            theme: "from-emerald-500/20 to-emerald-900/5"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 border-b border-neutral-100">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <SlideUp>
                        <h1 className="mb-6 text-balance">Curated Curriculums</h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
                            ELV8S offers focused programs that combine real-world experience, structured learning, and practical tools.
                        </p>
                    </SlideUp>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12 space-y-24">
                    {programs.map((program, index) => (
                        <FadeIn key={program.id} delay={index * 0.1}>
                            <div className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl shadow-neutral-200/50 border border-neutral-100 transition-all duration-500 hover:-translate-y-1">
                                <div className="grid lg:grid-cols-12 gap-0">

                                    {/* Visual Side */}
                                    <div className={`lg:col-span-4 relative min-h-[300px] lg:min-h-full bg-primary-950 p-10 flex flex-col justify-between overflow-hidden group`}>
                                        <img
                                            src={`/images/program-${program.id}.png`}
                                            alt={program.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${program.theme} opacity-80 transition-opacity duration-500 group-hover:opacity-60`} />

                                        <div className="relative z-10">
                                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-500">
                                                <program.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <h2 className="text-white text-3xl mb-3 leading-tight font-heading">{program.title}</h2>
                                            <p className="text-white/60 font-medium tracking-wide text-sm text-white font-accent">{program.subtitle}</p>
                                        </div>

                                        <div className="relative z-10 pt-12 hidden lg:block">
                                            <p className="text-white/40 text-xs uppercase tracking-widest text-white font-accent">Recommended For:</p>
                                            <p className="text-white/80 text-sm mt-2 leading-relaxed text-white font-sans">{program.whoFor}</p>
                                        </div>
                                    </div>
                                    {/* Content Side */}
                                    <div className="lg:col-span-8 p-10 lg:p-16 flex flex-col justify-center">
                                        <div className="mb-10">
                                            <h3 className="text-lg font-bold text-primary-900 mb-4 font-heading">What it covers</h3>
                                            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
                                                {program.features.map((feature, i) => (
                                                    <div key={i} className="flex items-start gap-3">
                                                        <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                                                        <span className="text-neutral-700 text-sm leading-relaxed font-sans">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-10 bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                            <h3 className="text-sm font-bold text-primary-900 uppercase tracking-wider mb-4 font-heading">Outcomes</h3>
                                            <ul className="space-y-2">
                                                {program.outcomes.map((outcome, i) => (
                                                    <li key={i} className="text-neutral-600 text-sm flex items-start gap-3 font-sans">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-start mt-2 flex-shrink-0" />
                                                        <span className="leading-relaxed">{outcome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <Button size="lg" className="shadow-lg shadow-primary-900/5 font-heading">
                                                {program.cta}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section >

            {/* Custom Programs */}
            < section className="py-24 bg-primary-950 text-white relative overflow-hidden" >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-800/50 to-transparent" />
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <SlideUp>
                            <h2 className="text-white mb-6">Custom & Industry-Focused Programs</h2>
                            <p className="text-white/70 text-lg mb-8 font-light leading-relaxed">
                                We are continually expanding ELV8S into tailored programs for specific sectors and organizations.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                <div>
                                    <h4 className="text-accent-500 font-bold mb-4 uppercase tracking-wider text-sm">Industries</h4>
                                    <ul className="space-y-2 text-white/80">
                                        <li>Manufacturing</li>
                                        <li>Healthcare</li>
                                        <li>Banking & Financial Services</li>
                                        <li>Technology & Digital Products</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-accent-500 font-bold mb-4 uppercase tracking-wider text-sm">For Organizations</h4>
                                    <ul className="space-y-2 text-white/80">
                                        <li>Onboard new hires effectively</li>
                                        <li>Upgrade existing team skills</li>
                                        <li>Integrate AI into processes</li>
                                    </ul>
                                </div>
                            </div>
                            <Button variant="white" size="lg" asChild>
                                <Link href="/contact">
                                    Contact Us for Custom Training
                                </Link>
                            </Button>
                        </SlideUp>

                        <ScaleIn delay={0.2}>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                                <Layers className="w-12 h-12 text-accent-500 mb-6" />
                                <h3 className="text-2xl text-white mb-4">Tailored to Your Needs</h3>
                                <p className="text-white/60 leading-relaxed">
                                    "ELV8S helped us redesign our onboarding process, resulting in 40% faster ramp-up times for new analysts."
                                </p>
                            </div>
                        </ScaleIn>
                    </div>
                </div>
            </section >

            <Footer />
            <Chatbot />
        </main >
    );
}
