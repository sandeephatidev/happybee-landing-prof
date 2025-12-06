'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export default function Header() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className={cn(
                "container mx-auto px-6 rounded-full transition-all duration-300",
                scrolled ? "bg-black/60 backdrop-blur-md border border-white/10 p-4" : "bg-transparent p-0"
            )}>
                <nav className="flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tighter">
                        Happy<span className="text-primary">Bee</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <a href="#products" className="hover:text-primary transition-colors">Products</a>
                        <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
                        <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
                    </div>

                    <Button
                        className="px-6 py-2 text-sm h-auto"
                        onClick={() => window.open(siteConfig.whatsappLink, '_blank')}
                    >
                        Join Network
                    </Button>
                </nav>
            </div>
        </motion.header>
    );
}
