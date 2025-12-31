"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, Home, BookOpen, Info, Phone, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/", Icon: Home, color: "bg-blue-100 text-blue-600" },
    { name: "Programs", href: "/programs", Icon: BookOpen, color: "bg-emerald-100 text-emerald-600" },
    { name: "About", href: "/about", Icon: Info, color: "bg-amber-100 text-amber-600" },
    { name: "Contact", href: "/contact", Icon: Phone, color: "bg-rose-100 text-rose-600" },
];

const locations = [
    {
        country: "Canada",
        cities: ["Toronto", "Vancouver"]
    },
    {
        country: "USA",
        cities: ["New Jersey"]
    }
];

function NavLink({ name, href, Icon, color }) {
    const [isHovered, setIsHovered] = useState(false);
    const [bgClass, textClass] = color.split(" ");

    return (
        <Link href={href} legacyBehavior={false}>
            <motion.div
                className="relative flex items-center justify-center h-10 px-4 rounded-full text-sm font-medium text-primary-900/80 transition-colors cursor-pointer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                {/* Animated Background Pill */}
                <motion.div
                    className={`absolute inset-0 rounded-full z-0 ${bgClass}`}
                    initial={false}
                    animate={{
                        width: isHovered ? 40 : "100%",
                        left: isHovered ? "50%" : "0%",
                        x: isHovered ? "-50%" : "0%",
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                {/* Text */}
                <motion.span
                    className="whitespace-nowrap relative z-10"
                    animate={{
                        opacity: isHovered ? 0 : 1,
                        scale: isHovered ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {name}
                </motion.span>

                {/* Icon */}
                <motion.div
                    className={`absolute inset-0 flex items-center justify-center z-10 ${textClass}`}
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.5,
                        rotate: isHovered ? 0 : -45,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <Icon size={20} />
                </motion.div>
            </motion.div>
        </Link>
    );
}

function LocationDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Violet theme to match other nav links
    const bgClass = "bg-violet-100";
    const textClass = "text-violet-600";

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative ml-2" ref={dropdownRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                animate={isOpen ? "open" : "initial"}
                className="relative flex items-center justify-center h-10 px-4 rounded-full text-sm font-medium text-primary-900/80 transition-colors cursor-pointer"
            >
                {/* Animated Background Pill */}
                <motion.div
                    className={`absolute inset-0 rounded-full z-0 ${bgClass}`}
                    variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 },
                        open: { opacity: 1 },
                        tap: { scale: 0.95 }
                    }}
                />

                {/* Text */}
                <motion.div
                    className="relative z-10 flex items-center gap-1.5"
                    variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.05 },
                        tap: { scale: 0.95 }
                    }}
                >
                    <span className={textClass}>Locations</span>
                    <ChevronDown size={14} className={`opacity-50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${textClass}`} />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-64 bg-white/90 backdrop-blur-xl border border-neutral-200/60 rounded-2xl shadow-xl shadow-primary-900/10 overflow-hidden p-4 z-50"
                    >
                        <div className="space-y-4">
                            {locations.map((loc) => (
                                <div key={loc.country}>
                                    <h4 className="text-xs font-bold text-primary-900/40 uppercase tracking-wider mb-2 px-2">
                                        {loc.country}
                                    </h4>
                                    <div className="space-y-1">
                                        {loc.cities.map((city) => (
                                            <div
                                                key={city}
                                                className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-violet-50 transition-colors cursor-default group"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 group-hover:scale-125 transition-transform" />
                                                <span className="text-sm text-primary-900 font-medium">{city}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? "py-4" : "py-6"
                )}
            >
                <div className={cn(
                    "flex items-center justify-between px-6 py-3 transition-all duration-300 mx-auto",
                    scrolled
                        ? "bg-white/90 backdrop-blur-xl border border-neutral-200/50 shadow-xl shadow-primary-900/5 rounded-2xl max-w-6xl"
                        : "bg-white/70 backdrop-blur-lg border border-neutral-200/30 shadow-sm shadow-primary-900/5 rounded-2xl max-w-7xl"
                )}>
                    <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-primary-900 z-50 relative">
                        ELV8S
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} {...link} />
                        ))}
                        {/* <LocationDropdown /> */}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-primary-900 z-50 relative p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

            </motion.nav >

            {/* Mobile Drawer */}
            < AnimatePresence >
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden overflow-y-auto py-20"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-heading font-bold text-primary-900"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="w-full max-w-xs bg-neutral-50 rounded-3xl p-6 border border-neutral-100">
                            <div className="flex items-center gap-2 mb-6 justify-center text-primary-900/60">
                                <MapPin size={18} />
                                <span className="font-medium uppercase tracking-widest text-xs">Locations</span>
                            </div>
                            <div className="space-y-6">
                                {locations.map((loc) => (
                                    <div key={loc.country} className="text-center">
                                        <h4 className="text-xs font-bold text-primary-900/40 uppercase tracking-wider mb-3">
                                            {loc.country}
                                        </h4>
                                        <div className="space-y-2">
                                            {loc.cities.map((city) => (
                                                <div key={city} className="text-lg font-heading font-medium text-primary-900">
                                                    {city}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )
                }
            </AnimatePresence >
        </>
    );
}
