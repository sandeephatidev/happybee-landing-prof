'use client';
import { motion } from 'framer-motion';
import { Check, Leaf, ShoppingBag } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';
import { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import { siteConfig } from '@/config/site';

const products = [
    {
        id: 4,
        title: "Sweet Heart Sprouts Mix",
        desc: "Crunchy, fresh, and protein-packed goodness.",
        image: "/sprouts-mix.png",
        icon: "🌱",
        badge: "Fresh Daily",
        brandLogo: "/tcc-logo.png",
        brandName: "The Chutney Club",
        benefits: ["High protein & fiber", "Rich in antioxidants", "Ready to eat"],
        ingredients: "Moong, Chana, & Seasonal Beans",
        price: 90,
        strikePrice: 120,
        quantity: "100g"
    },
    {
        id: 9,
        title: "Fruit Pop Veggie Salad",
        desc: "A colorful and refreshing mix of fresh fruits and vegetables.",
        image: "/fruit-pop.png",
        icon: "🥗",
        badge: "Fresh & Healthy",
        brandLogo: "/tcc-logo.png",
        brandName: "The Chutney Club",
        benefits: ["Rich in vitamins", "Low calorie snack", "All-natural ingredients"],
        ingredients: "Mixed fresh fruits, organic vegetables, natural preservatives",
        price: 90,
        strikePrice: 120,
        quantity: "200g"
    },
    {
        id: 5,
        title: "Nuts & Seeds Masala Mix",
        desc: "A power-packed savory blend for daily snacking.",
        image: "/nuts-seeds-mix.png",
        icon: "🥜",
        badge: "Bestseller",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["Weight management support", "Boosts energy", "Aids digestion"],
        ingredients: "Almonds, cashews, peanuts, flaxseed, pumpkin seed...",
        price: 150,
        strikePrice: 200,
        quantity: "200g"
    },
    {
        id: 12,
        title: "Kaju Pepperia",
        desc: "Spicy and savory roasted cashews with peppery notes.",
        image: "/kaju-pepper.png",
        icon: "🥜",
        badge: "Spicy Twist",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["Rich in minerals", "Boosts immunity", "Flavorful snack"],
        ingredients: "Premium cashews, black pepper, sea salt",
        price: 150,
        strikePrice: 200,
        quantity: "100g"
    },
    {
        id: 10,
        title: "Badam-e-Namak",
        desc: "Delicious roasted almonds with a perfect salt blend.",
        image: "/salted-badam.png",
        icon: "🌰",
        badge: "Premium Snack",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["Rich in calcium", "High in protein", "Perfect snacking"],
        ingredients: "Premium almonds, sea salt, natural spices",
        price: 150,
        strikePrice: 200,
        quantity: "100g"
    },
    {
        id: 11,
        title: "Sunny Seed Bites",
        desc: "Sunflower seeds with a crispy, delightful crunch.",
        image: "/sunny-seeds.png",
        icon: "🌻",
        badge: "Energy Booster",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["Rich in Vitamin E", "Heart healthy", "Natural energy"],
        ingredients: "Sunflower seeds, sea salt, organic spices",
        price: 150,
        strikePrice: 200,
        quantity: "100g"
    },
    {
        id: 7,
        title: "Nuts Smoothie Mix",
        desc: "A wholesome & convenient breakfast smoothie base.",
        image: "/smoothie-mix.png",
        icon: "🥤",
        badge: "Breakfast Special",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["Instant energy", "Gut-friendly fiber", "Hormonal balance"],
        ingredients: "Premium nut blend, lactose-free, GMO-free",
        price: 150,
        strikePrice: 200,
        quantity: "200g"
    },
    {
        id: 8,
        title: "Healthy Gut Drink",
        desc: "A refreshing way to support digestion & metabolism.",
        image: "/gut-powder.png",
        icon: "🧉",
        badge: "Probiotic",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["Probiotic + prebiotic", "Reduces bloating", "Improves gut flora"],
        ingredients: "Proprietary probiotic blend, natural fibers",
        price: 150,
        strikePrice: 200,
        quantity: "200g"
    },
    {
        id: 1,
        title: "Cold Pressed Groundnut Oil",
        desc: "Traditional richness for authentic Indian cooking.",
        image: "/groundnut-oil.png",
        icon: "🥜",
        badge: "Cold Pressed",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["Heart healthy monounsaturated fats", "High smoke point for frying", "Rich nutty aroma"],
        ingredients: "100% Premium Groundnuts",
        price: 400,
        strikePrice: 600,
        quantity: "1 litre"
    },
    {
        id: 2,
        title: "Cold Pressed Coconut Oil",
        desc: "Pure & unrefined for versatile usage.",
        image: "/coconut-oil.png",
        icon: "🥥",
        badge: "Cold Pressed",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["Excellent for skin & hair", "Boosts metabolism", "Rich in lauric acid"],
        ingredients: "Sun-dried Coconuts",
        price: 600,
        strikePrice: 800,
        quantity: "1 Litre"
    },
    {
        id: 3,
        title: "Wood Pressed Sunflower Oil",
        desc: "Light and healthy choice for daily meals.",
        image: "/sunflower-oil.png",
        icon: "🌻",
        badge: "Wood Pressed",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["Rich in Vitamin E", "Easy to digest", "Neutral flavor profile"],
        ingredients: "Premium Sunflower Seeds",
        price: 400,
        strikePrice: 600,
        quantity: "1 Litre"
    },
    {
        id: 6,
        title: "Nutri Flour Mix",
        desc: "A nutrient-rich blend for healthier chapatis.",
        image: "/nutri-mix.png",
        icon: "🌾",
        badge: "Gluten Conscious",
        brandLogo: "/uw-logo.png",
        brandName: "Urthwise",
        benefits: ["High in fiber", "Supports digestion", "Gluten-reduced"],
        ingredients: "Flaxseed, pumpkin seed, melon seed, almond, gram flour...",
        price: 150,
        strikePrice: 200,
        quantity: "200g"
    }
];

export default function Products() {
    const [displayCount, setDisplayCount] = useState(3);

    const handleShowMore = () => {
        setDisplayCount(prevCount => prevCount + 3);
    };

    const displayedProducts = products.slice(0, displayCount);

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

            {/* Grid Layout */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayedProducts.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-accent rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-primary/20 hover:border-primary flex flex-col h-full"
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

                                {product.brandLogo && (
                                    <div className="absolute top-4 left-4 bg-white/90 rounded-lg w-14 h-14 flex items-center justify-center z-10">
                                        <Image
                                            src={product.brandLogo}
                                            alt={product.brandName}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    </div>
                                )}

                                {/* Price Overlay - Bottom */}
                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                                        <span className="text-lg font-bold text-primary">₹{product.price}</span>
                                        <span className="text-xs text-gray-300 line-through">₹{product.strikePrice}</span>
                                    </div>
                                    <span className="text-xs font-semibold bg-black/50 backdrop-blur-sm text-primary px-2 py-1 rounded-lg">
                                        {product.quantity}
                                    </span>
                                </div>
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
                                        href={siteConfig.whatsAppCatalogueLink}
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
                </div>

                {/* Show More Button */}
                {displayCount < products.length && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <button
                            onClick={handleShowMore}
                            className="px-8 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                        >
                            Show More Products
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
