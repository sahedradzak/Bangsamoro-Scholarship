"use client";

import { PARTNERS } from "@/lib/mock-data";
import { motion } from "framer-motion";

export default function PartnerMarquee() {
    // We double the partners to create a seamless loop
    const quadruplePartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

    return (
        <section className="pt-6 pb-2 overflow-hidden relative">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Trusted Partners</h2>

                <div className="relative py-4">
                    {/* Gradient masks for smooth edges - adjusted to be more transparent */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background/50 via-background/20 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background/50 via-background/20 to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        className="flex items-center gap-16 md:gap-32 whitespace-nowrap"
                        style={{ width: "fit-content" }}
                        initial={{ x: 0 }}
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {quadruplePartners.map((partner, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 transition-all duration-500 group cursor-pointer"
                            >
                                <div className="h-12 w-12 md:h-20 md:w-20 relative transform group-hover:scale-110 transition-transform duration-500">
                                    <img
                                        src={partner.logo}
                                        alt={partner.code}
                                        className="object-contain w-full h-full mix-blend-multiply"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div >
        </section >
    );
}
