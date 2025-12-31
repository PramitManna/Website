import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary-950 text-white py-24 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-4">
                        <Link href="/" className="text-4xl font-serif font-bold tracking-tighter mb-8 block">
                            ELV8S
                        </Link>
                        <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm font-light">
                            Elevating careers and businesses through clarity, confidence, and intelligent innovation.
                        </p>
                        <div className="flex space-x-6">
                            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="text-white/40 hover:text-white transition-colors">
                                    <Icon size={20} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="text-sm font-medium uppercase tracking-widest text-white/40 mb-8">Programs</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            {["The Corporate Launchpad", "ELV8S AI", "ELV8S Finance", "Corporate Training"].map((item) => (
                                <li key={item}>
                                    <Link href="/programs" className="hover:text-white transition-colors flex items-center group">
                                        {item}
                                        <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-sm font-medium uppercase tracking-widest text-white/40 mb-8">Company</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            {["About Us", "Contact", "Careers", "Privacy Policy"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-sm font-medium uppercase tracking-widest text-white/40 mb-8">Contact</h4>
                        <ul className="space-y-4 text-sm text-white/70 font-light">
                            <li>info@elv8s.com</li>
                            <li className="space-y-4">
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Canada</p>
                                    <p className="text-white font-medium">Toronto, Vancouver</p>
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">USA</p>
                                    <p className="text-white font-medium">New Jersey</p>
                                </div>
                            </li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} ELV8S. All rights reserved.</p>
                    <p>Designed with precision.</p>
                </div>
            </div>
        </footer>
    );
}
//  info@elv8s.com