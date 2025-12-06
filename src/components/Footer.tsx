'use client';
import { Facebook, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10 text-gray-400 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <div className="relative h-12 w-48 mb-6">
                            <Image
                                src="/happybee-logo.png"
                                alt="HappyBee"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="max-w-sm mb-8 leading-relaxed">
                            We are a community-led movement delivering premium, nutritionist-approved essentials directly to you. Better prices. Better health. Together.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Products', 'Scientific Benefits', 'Group Buy Model', 'Success Stories'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-primary transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact/Newsletter Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
                        <p className="mb-4 text-sm">Get the latest group-buy deals and health tips.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary/50 text-white"
                            />
                            <button className="bg-primary text-black p-2 rounded-lg hover:bg-primary-light transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        <div className="mt-8 text-sm">
                            <p>Have questions?</p>
                            <a
                                href={siteConfig.whatsappLink}
                                className="text-primary hover:underline"
                                onClick={() => sendGAEvent('event', 'whatsapp_click', { event_category: 'engagement', event_label: 'Footer Link' })}
                            >
                                Chat with us on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
                    <p>&copy; {new Date().getFullYear()} HappyBee Collective. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
