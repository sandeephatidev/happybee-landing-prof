'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { sendGAEvent } from '@next/third-parties/google';
import { useState, useEffect } from 'react';
import Button from './Button';
import { ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroImages = ['/hero-image.png', '/hero-2.png', '/hero-3.png'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [heroImages.length]);
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] opacity-50 animate-pulse" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
                    >
                        <Star size={14} fill="currentColor" /> Premium healthy products
                    </motion.div>

                    <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-tight">
                        {siteConfig.hero.headline.split('\n')[0]} <br />
                        <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                            {siteConfig.hero.highlight}
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-lg">
                        {siteConfig.hero.subhead}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href={siteConfig.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sendGAEvent({ event: 'whatsapp_click', value: 'Hero CTA' })}
                        >
                            <Button variant="whatsapp">
                                Join WhatsApp Group <ArrowRight size={18} />
                            </Button>
                        </a>
                        <Button
                            variant="outline"
                            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Scan to Join
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-surface-highlight border border-black flex items-center justify-center text-xs">U{i}</div>
                            ))}
                        </div>
                        <p>{siteConfig.cta.sub}</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
                        {/* Image Slider */}
                        <div className="relative overflow-hidden rounded-3xl">
                            {heroImages.map((image, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: currentSlide === idx ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={image}
                                        alt="Premium Healthy Products"
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover rounded-3xl shadow-[0_0_50px_rgba(247,185,147,0.2)]"
                                        priority={idx === 0}
                                    />
                                </motion.div>
                            ))}
                            <Image
                                src={heroImages[currentSlide]}
                                alt="Premium Healthy Products"
                                width={600}
                                height={600}
                                className="rounded-3xl shadow-[0_0_50px_rgba(247,185,147,0.2)]"
                                priority
                            />
                        </div>

                        {/* Slider Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {heroImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        currentSlide === idx ? 'bg-primary w-6' : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-6 -right-6 md:-right-10 bg-black/60 backdrop-blur-md border border-primary/20 p-2 pr-6 rounded-full flex items-center gap-3 shadow-2xl"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl shadow-inner">
                                👩‍⚕️
                            </div>
                            <div className="text-xs text-left">
                                <div className="font-bold text-white uppercase tracking-wider">Approved By</div>
                                <div className="text-primary font-semibold text-sm">Certified Nutritionist</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
