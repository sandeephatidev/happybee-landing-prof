'use client';
import { motion } from 'framer-motion';
import { User, Users, Store, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';
import Button from './Button';
import { siteConfig } from '@/config/site';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export default function CompareAndCTA() {
    return (
        <>
            {/* Comparison Section */}
            <section id="benefits" className="py-24 bg-black relative text-white overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Smart Way to Shop</h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-lg">
                            Stop paying for retail inefficiencies. Experience the power of community buying.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
                        {/* Retail Card (The Old Way) */}
                        <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Solo Shopper</h3>
                                    <p className="text-sm text-gray-500">Traditional Retail Model</p>
                                </div>
                            </div>

                            <ul className="space-y-6 text-gray-400">
                                <li className="flex items-center gap-4">
                                    <Store className="text-gray-600" />
                                    <span className="line-through decoration-red-500/50">High Retail Markups</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Clock className="text-gray-600" />
                                    <span>Stocked for Months</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <User className="text-gray-600" />
                                    <span>No Community Benefits</span>
                                </li>
                            </ul>
                        </div>

                        {/* Group Buy Card (The HappyBee Way) */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-md shadow-[0_0_50px_rgba(247,185,147,0.15)] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-black shadow-lg">
                                    <Users size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">HappyBee Collective</h3>
                                    <p className="text-sm text-primary">Community-Powered Savings</p>
                                </div>
                            </div>

                            <ul className="space-y-6">
                                <li className="flex items-center gap-4 text-lg">
                                    <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                                        <TrendingDown size={20} />
                                    </div>
                                    <span className="font-semibold text-white">Wholesale Prices</span>
                                </li>
                                <li className="flex items-center gap-4 text-lg">
                                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <span className="font-semibold text-white">Fresh Group Batches</span>
                                </li>
                                <li className="flex items-center gap-4 text-lg">
                                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                                        <Users size={20} />
                                    </div>
                                    <span className="font-semibold text-white">Community Rewards</span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-sm text-gray-400 text-center mb-4">Join 400+ others saving today</p>
                                <Button className="w-full justify-center" onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Start Saving Together
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="reviews" className="py-24 bg-surface relative overflow-hidden">
                <div className="container mx-auto px-6 mb-12">
                    <h2 className="text-3xl font-bold text-center mb-4">Members Love It</h2>
                    <p className="text-gray-400 text-center max-w-xl mx-auto">
                        See what our community is saying about the HappyBee experience.
                    </p>
                </div>

                <div className="h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={[
                            { quote: "The nuts smoothie mix tasted premium and kept me full for hours.", name: "Priya S.", title: "MBA Student" },
                            { quote: "The gut drink was refreshing. Definitely something I’d buy monthly.", name: "Arjun K.", title: "Early Tester" },
                            { quote: "Nutri flour made my rotis softer and healthier. Huge yes!", name: "Sneha R.", title: "Home Maker" },
                            { quote: "Finally a healthy snack that doesn't taste like cardboard. Love it!", name: "Vikram M.", title: "Software Engineer" },
                            { quote: "Delivery was super fast and the packaging is beautiful. Makes for a great gift.", name: "Ananya P.", title: "Marketing Lead" },
                            { quote: "My kids actually ask for the smoothie mix. That's a win in my book!", name: "Rahul D.", title: "Father of two" },
                            { quote: "The pricing is unbeatable for this quality. Highly recommended.", name: "Sarah L.", title: "Wellness Coach" },
                            { quote: "I've replaced my morning coffee with the gut drink. Amazing energy.", name: "Mike T.", title: "Fitness Trainer" },
                            { quote: "Joining was so easy, and the savings are real. Love the community.", name: "Emily W.", title: "Yoga Instructor" },
                            { quote: "Best decision for my family's health. We order every month now.", name: "David B.", title: "Architect" },
                        ]}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section id="join" className="py-24 bg-gradient-to-b from-black to-surface text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Revolution</h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Be part of an exclusive community helping us validate this new way of buying healthier essentials—at better prices.
                    </p>

                    <div className="p-8 glass-panel inline-block rounded-2xl mb-8">
                        <img
                            src="/qrcode-ipl.jpeg"
                            alt="QR Code"
                            className="w-48 h-48 rounded-lg"
                        />
                    </div>

                    <div>
                        <a
                            href={siteConfig.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sendGAEvent({ event: 'whatsapp_click', value: 'Bottom CTA' })}
                        >
                            <Button className="text-lg px-12 py-4">
                                {siteConfig.cta.main}
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
