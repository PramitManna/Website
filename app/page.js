"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/features/Chatbot";
import { ChatTrigger } from "@/components/features/ChatTrigger";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight, Sparkles, BarChart3, BookOpen, Layers, Target, Lightbulb, CheckCircle2, GraduationCap, Briefcase, RefreshCw, TrendingUp, Users, ChevronRight, Cpu } from "lucide-react";
import { FadeIn, SlideUp, ScaleIn, StaggerContainer, staggerItem } from "@/components/ui/Motion";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Text Content */}
                        <div className="space-y-6">
                            <SlideUp delay={0.1}>
                                <h1 className="text-primary-900 font-heading text-balance">
                                    Elevate Your Career. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-start">
                                        Master the Corporate Landscape.
                                    </span>
                                </h1>
                            </SlideUp>

                            <SlideUp delay={0.2}>
                                <p className="text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed font-light font-sans">
                                    ELV8S is your partner in navigating the transition from classroom to boardroom. We empower new joiners to master corporate culture with clarity and confidence. By blending essential professional soft skills with the smart use of AI, we ensure you don’t just start your journey—you accelerate your path to success.
                                </p>
                            </SlideUp>

                            <SlideUp delay={0.3}>
                                <div className="flex flex-col sm:flex-row gap-5">
                                    <motion.div whileTap={{ scale: 0.95 }}>
                                        <Button size="lg" className="shadow-xl shadow-primary-900/10 font-heading tracking-tight flex items-center" asChild>
                                            <Link href="/contact">
                                                Book a Free 20-Minute Consultation
                                            </Link>
                                        </Button>
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.95 }}>
                                        <Button variant="outline" size="lg" className="group font-heading tracking-wide border-gray-300 border-2 text-sm" asChild>
                                            <Link href="/programs">
                                                Explore Training Programs <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </div>
                                <p className="text-sm text-neutral-500 mt-4 flex items-center gap-2 font-accent">
                                    <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                                    Need quick answers? Ask our ELV8S chatbot in the corner of your screen.
                                </p>
                            </SlideUp>
                        </div>

                        {/* Visual Content */}
                        <ScaleIn delay={0.4} className="relative">
                            <motion.div
                                className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] bg-neutral-100 group"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img
                                    src="/images/hero.png"
                                    alt="Professional presenting to team"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/10 to-transparent transition-opacity duration-700 group-hover:opacity-0" />

                                {/* Floating Badges */}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-yellow-100 p-2 rounded-full">
                                            <Target className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider font-accent">Impact</p>
                                            <p className="text-sm font-bold text-primary-900 font-heading">High Performance</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.0, duration: 0.6 }}
                                    className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <Lightbulb className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider font-accent">Innovation</p>
                                            <p className="text-sm font-bold text-primary-900 font-heading">AI Integrated</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </ScaleIn>
                    </div>
                </div>
            </section>

            {/* Separator */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

            {/* 2. What is ELV8S? */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <FadeIn className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="mb-6 font-heading text-primary-900">What is ELV8S?</h2>
                        <div className="w-24 h-1.5 bg-accent-500 mx-auto rounded-full mb-8" />
                        <p className="text-xl text-neutral-600 leading-relaxed font-light font-sans">
                            We bridge the gap between academic theory and professional reality. Whether you’re a student, a new hire, or a team leader, we provide the practical skills, frameworks, and AI fluency needed to succeed in today’s fast-paced business environment.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Briefcase,
                                title: "Demystifying the Corporate World",
                                desc: "How decisions are made, how work really gets done, and what high performance actually looks like.",
                                color: "bg-amber-500 text-white hover:bg-amber-600 border-amber-200 hover:shadow-amber-500/20"
                            },
                            {
                                icon: Users,
                                title: "Embedding Practical Skills",
                                desc: "Communication, collaboration, problem-solving, decision-making, and professional presence.",
                                color: "bg-emerald-500 text-white hover:bg-emerald-600 border-emerald-200 hover:shadow-emerald-500/20"
                            },
                            {
                                icon: Cpu,
                                title: "Integrating AI",
                                desc: "Using the right tools and workflows to work faster, think sharper, and deliver better outcomes.",
                                color: "bg-rose-500 text-white hover:bg-rose-600 border-rose-200 hover:shadow-rose-500/20"
                            },
                        ].map((item, i) => (
                            <motion.div
                                variants={staggerItem}
                                key={i}
                                className={`group p-10 rounded-3xl bg-white border border-neutral-100 transition-all duration-500 cursor-default ${item.color.split(' ').pop()}`}
                                whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 ${item.color.split(' ').slice(0, 3).join(' ')}`}>
                                    <item.icon className="w-8 h-8 stroke-[1.5]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading text-primary-900">{item.title}</h3>
                                <p className="text-base text-neutral-600 leading-relaxed font-sans">{item.desc}</p>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* 3. Mission Section */}
            <section className="py-32 bg-primary-950 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900 to-transparent opacity-50" />
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <SlideUp>
                            <h2 className="text-white mb-8 leading-tight">Our Mission</h2>
                            <p className="text-xl text-neutral-300 text-white mb-8 font-light leading-relaxed">
                                The mission of ELV8S is to translate and demystify the world of work so people at every career stage can:
                            </p>
                            <div className="space-y-6 mb-10">
                                {["Show up with confidence", "Deliver with clarity", "Grow with intention and purpose"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent-500 group-hover:border-accent-500 transition-colors">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-lg font-medium text-white/90 text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-white/80 text-white font-light border-l-4 border-accent-500 pl-6 italic">
                                We don’t just transfer knowledge. We design transformative learning experiences that change how you think, how you work, and how you show up in the world.
                            </p>
                        </SlideUp>

                        <ScaleIn delay={0.2} className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group">
                            <img
                                src="/images/mission.png"
                                alt="Diverse team collaborating"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/20 to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 right-0 p-10">
                                <p className="text-white font-serif text-2xl italic">"Transformative learning experiences."</p>
                            </div>
                        </ScaleIn>
                    </div>
                </div>
            </section>

            {/* 4. What We Do */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <FadeIn className="text-center mb-16">
                        <h2 className="mb-6 font-heading text-primary-900">What We Do</h2>
                        <div className="w-24 h-1.5 bg-accent-500 mx-auto rounded-full" />
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Workplace-Readiness & Performance",
                                desc: "We help individuals understand expectations at work, manage stakeholders, communicate clearly, and navigate real-world situations that don’t appear in textbooks."
                            },
                            {
                                title: "AI-Powered Ways of Working",
                                desc: "We teach you how to use AI—not as a buzzword, but as a daily companion for research, writing, analysis, planning, and problem-solving."
                            },
                            {
                                title: "Finance, Investment & Banking Enablement",
                                desc: "For those in, or entering, financial services, we provide structured guidance and coaching around key certifications and skills needed to grow in the industry."
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="p-8 rounded-2xl bg-white border border-neutral-100 hover:border-accent-200 transition-all duration-300 cursor-default"
                            >
                                <h3 className="text-xl font-bold mb-4 text-primary-900 font-heading">{feature.title}</h3>
                                <p className="text-neutral-600 leading-relaxed font-sans">{feature.desc}</p>
                                <div className="mt-6">
                                    <Link href="/programs" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-primary-900 transition-all duration-300 bg-transparent border border-neutral-200 rounded-full group hover:bg-primary-900 hover:text-white hover:border-primary-900 hover:shadow-lg hover:shadow-primary-900/20">
                                        Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Separator */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

            {/* 5. Who We Work With */}
            <section className="py-24 text-center relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <SlideUp>
                        <h2 className="text-primary-900 mb-6 font-heading">Who We Work With</h2>
                        <div className="w-24 h-1.5 bg-accent-500 mx-auto rounded-full mb-8" />
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light mb-16 font-sans">
                            If you’re serious about your growth and impact, ELV8S is built for you.
                        </p>
                    </SlideUp>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: GraduationCap,
                                title: "Students & Graduates",
                                desc: "Bridge the gap between academic theory and workplace reality. Learn the unwritten rules of business.",
                                color: "bg-amber-500 text-white group-hover:bg-amber-600"
                            },
                            {
                                icon: Briefcase,
                                title: "Early Career Professionals",
                                desc: "Accelerate your trajectory. Master the skills that get you noticed, trusted, and promoted.",
                                color: "bg-emerald-500 text-white group-hover:bg-emerald-600"
                            },
                            {
                                icon: TrendingUp,
                                title: "Team Leaders & Managers",
                                desc: "Equip your team with a shared language for performance, problem-solving, and AI integration.",
                                color: "bg-rose-500 text-white group-hover:bg-rose-600"
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="group p-8 rounded-3xl bg-white border border-neutral-100 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${item.color}`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary-900">{item.title}</h3>
                                <p className="text-neutral-600 leading-relaxed font-sans text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. ELV8S Training Snapshot */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <FadeIn className="text-center mb-16">
                        <h2>ELV8S Training Snapshot</h2>
                    </FadeIn>

                    <StaggerContainer className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Corporate Launchpad",
                                subtitle: "Workplace Readiness Intensive",
                                desc: "Master the transition from campus to career with our intensive 16 hours program split over comfortable duration. We partner with you to navigate corporate culture, ways of working, do’s and don’ts and performance expectations —giving you the clarity and confidence to perform from day one.",
                                image: "/images/core_visual.png"
                            },
                            {
                                title: "ELV8S AI",
                                subtitle: "Working Smarter with AI",
                                desc: "A focused training on using AI tools to boost real-life productivity and problem-solving.",
                                image: "/images/ai_visual.png"
                            },
                            {
                                title: "ELV8S Finance",
                                subtitle: "Certifications & Career Pathways",
                                desc: "Guidance and coaching for key finance and banking certifications and roles.",
                                image: "/images/finance_visual.png"
                            },
                        ].map((program, i) => (
                            <motion.div variants={staggerItem} key={i}>
                                <Card className="flex flex-col h-full hover:shadow-xl border-none bg-white group cursor-pointer">
                                    <div className="h-48 mb-6 rounded-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                                        <p className="text-xs font-bold tracking-widest text-secondary-start uppercase mb-4">{program.subtitle}</p>
                                        <p className="text-neutral-600 mb-6 leading-relaxed">{program.desc}</p>
                                    </div>
                                    <div className="pt-6 mt-auto">
                                        <Link href="/programs" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-primary-900 transition-all duration-300 bg-transparent border border-neutral-200 rounded-full group hover:bg-primary-900 hover:text-white hover:border-primary-900 hover:shadow-lg hover:shadow-primary-900/20 w-full justify-center">
                                            Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </div>
            </section>


            {/* 8. Closing CTA */}
            <section className="py-32 relative overflow-hidden bg-primary-950">
                <div className="absolute inset-0 bg-primary-950" />
                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
                    <SlideUp>
                        <h2 className="text-white text-4xl md:text-5xl mb-8 tracking-tight">Ready to Elevate Your Next Step?</h2>
                        <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 font-light">
                            Whether you’re preparing for your first role, aiming for promotion, or re-designing how your team works, ELV8S can help you move with more confidence and clarity.
                        </p>
                        <Button variant="white" size="lg" className="h-16 px-12 text-lg shadow-2xl hover:scale-105 transition-transform duration-300" asChild>
                            <Link href="/contact">
                                Book a Free Consultation
                            </Link>
                        </Button>
                    </SlideUp>
                </div>
            </section>

            <Footer />
            <Chatbot />
        </main>
    );
}
