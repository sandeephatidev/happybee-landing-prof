'use client';
import { motion } from 'framer-motion';
import { Check, Leaf, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';
import { useRef } from 'react';
import Image from 'next/image';
import Button from './Button';
import { siteConfig } from '@/config/site';

const products = [
    {
        id: 5,
        title: "Nuts & Seeds Masala Mix",
        desc: "A power-packed savory blend for daily snacking.",
        image: "/nuts-seeds-mix.png",
        icon: "🥜",
        badge: "Bestseller",
        benefits: ["Weight management support", "Boosts energy", "Aids digestion"],
        ingredients: "Almonds, cashews, peanuts, flaxseed, pumpkin seed..."
    },
    {
        id: 4,
        title: "Fresh Sprouts Mix",
        desc: "Crunchy, fresh, and protein-packed goodness.",
        image: "/sprouts-mix.png",
        icon: "🌱",
        badge: "Fresh Daily",
        benefits: ["High protein & fiber", "Rich in antioxidants", "Ready to eat"],
        ingredients: "Moong, Chana, & Seasonal Beans"
    },
    {
        id: 7,
        title: "Nuts Smoothie Mix",
        desc: "A wholesome & convenient breakfast smoothie base.",
        image: "/smoothie-mix.png",
        icon: "🥤",
        badge: "Breakfast Special",
        benefits: ["Instant energy", "Gut-friendly fiber", "Hormonal balance"],
        ingredients: "Premium nut blend, lactose-free, GMO-free"
    },
    {
        id: 8,
        title: "Healthy Gut Drink",
        desc: "A refreshing way to support digestion & metabolism.",
        image: "/gut-powder.png",
        icon: "🧉",
        badge: "Probiotic",
        benefits: ["Probiotic + prebiotic", "Reduces bloating", "Improves gut flora"],
        ingredients: "Proprietary probiotic blend, natural fibers"
    },
    {
        id: 1,
        title: "Cold Pressed Groundnut Oil",
        desc: "Traditional richness for authentic Indian cooking.",
        image: "/groundnut-oil.png",
        icon: "🥜",
        badge: "Cold Pressed",
        benefits: ["Heart healthy monounsaturated fats", "High smoke point for frying", "Rich nutty aroma"],
        ingredients: "100% Premium Groundnuts"
    },
    {
        id: 2,
        title: "Cold Pressed Coconut Oil",
        desc: "Pure & unrefined for versatile usage.",
        image: "/coconut-oil.png",
        icon: "🥥",
        badge: "Cold Pressed",
        benefits: ["Excellent for skin & hair", "Boosts metabolism", "Rich in lauric acid"],
        ingredients: "Sun-dried Coconuts"
    },
    {
        id: 3,
        title: "Wood Pressed Sunflower Oil",
        desc: "Light and healthy choice for daily meals.",
        image: "/sunflower-oil.png",
        icon: "🌻",
        badge: "Wood Pressed",
        benefits: ["Rich in Vitamin E", "Easy to digest", "Neutral flavor profile"],
        ingredients: "Premium Sunflower Seeds"
    },
    {
        id: 6,
        title: "Nutri Flour Mix",
        desc: "A nutrient-rich blend for healthier chapatis.",
        image: "/nutri-mix.png",
        icon: "🌾",
        badge: "Gluten Conscious",
        benefits: ["High in fiber", "Supports digestion", "Gluten-reduced"],
        ingredients: "Flaxseed, pumpkin seed, melon seed, almond, gram flour..."
    }
];

export default function Products() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="products" className="py-24 bg-surface text-white relative">
            {/* Section Header */}
            <div className="container mx-auto px-6 mb-12 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4">Our Curated Premium Collection</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A curated selection of daily essentials and health boosters, crafted for your well-being.
                    </p>
                </motion.div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative group container mx-auto">
                {/* Scroll Controls (Overlay) */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hover:bg-black/70"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hover:bg-black/70"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={24} />
                </button>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="min-w-[300px] md:min-w-[380px] snap-center bg-accent rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-primary/20 hover:border-primary flex flex-col h-auto"
                        >
                            {/* Image Section - Conditional Rendering */}
                            <div className="relative h-48 w-full bg-white/5 overflow-hidden group flex items-center justify-center">
                                {product.image ? (
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="text-6xl bg-primary/20 w-24 h-24 rounded-full flex items-center justify-center animate-pulse">
                                        {product.icon}
                                    </div>
                                )}

                                {product.badge && (
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary z-10">
                                        {product.badge}
                                    </div>
                                )}
                            </div>

                            <div className="p-5 flex flex-col justify-between flex-grow bg-accent text-black">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{product.desc}</p>

                                    <div className="space-y-2 mb-5">
                                        <p className="text-xs font-semibold text-primary-dark uppercase tracking-wide border-b border-primary/10 pb-2">Why It's Better</p>
                                        <ul className="space-y-1.5">
                                            {product.benefits.map((b, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <Check size={14} className="text-primary-dark mt-0.5 shrink-0" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-primary/10 flex flex-col gap-4">
                                    <p className="text-xs text-gray-500 flex items-center gap-2 font-medium">
                                        <Leaf size={14} className="text-green-600" /> {product.ingredients}
                                    </p>

                                    <a
                                        href={siteConfig.whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                        onClick={() => sendGAEvent({ event: 'whatsapp_click', value: 'Product Card CTA', product_name: product.title })}
                                    >
                                        <Button className="w-full justify-center text-sm py-3" variant="primary" icon={<ShoppingBag size={16} />}>
                                            Order via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Padding element for right side scrolling */}
                    <div className="min-w-[1px] h-full" />
                </div>
            </div>
        </section>
    );
}
