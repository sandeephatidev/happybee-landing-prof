'use client';
import { motion } from 'framer-motion';
import { Check, Leaf, ShoppingBag } from 'lucide-react';
import Button from './Button';
import { siteConfig } from '@/config/site';

const products = [
    {
        id: 1,
        title: "Nuts & Seeds Masala Mix",
        desc: "A power-packed savory blend for daily snacking.",
        icon: "🥜",
        benefits: ["Weight management support", "Boosts energy", "Aids digestion"],
        ingredients: "Almonds, cashews, peanuts, flaxseed, pumpkin seed..."
    },
    {
        id: 2,
        title: "Nutri Flour Mix",
        desc: "A nutrient-rich blend for healthier chapatis.",
        icon: "🌾",
        benefits: ["High in fiber", "Supports digestion", "Gluten-reduced"],
        ingredients: "Flaxseed, pumpkin seed, melon seed, almond, gram flour..."
    },
    {
        id: 3,
        title: "Nuts Smoothie Mix",
        desc: "A wholesome & convenient breakfast smoothie base.",
        icon: "🥤",
        benefits: ["Instant energy", "Gut-friendly fiber", "Hormonal balance"],
        ingredients: "Premium nut blend, lactose-free, GMO-free"
    },
    {
        id: 4,
        title: "Healthy Gut Drink",
        desc: "A refreshing way to support digestion & metabolism.",
        icon: "🧉",
        benefits: ["Probiotic + prebiotic", "Reduces bloating", "Improves gut flora"],
        ingredients: "Proprietary probiotic blend, natural fibers"
    }
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-surface text-white relative">
            {/* Section Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4">Daily Essentials, Elevated.</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Each product is carefully formulated by nutritionists to deliver maximum health benefits without compromising on taste.
                    </p>
                </motion.div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-accent rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-primary/20 flex flex-col justify-between h-full text-black"
                    >
                        <div>
                            <div className="text-4xl mb-4 bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center">
                                {product.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{product.desc}</p>

                            <div className="space-y-2 mb-6">
                                <p className="text-xs font-semibold text-primary-dark uppercase tracking-wide">Key Benefits</p>
                                <ul className="space-y-1">
                                    {product.benefits.map((b, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <Check size={14} className="text-primary-dark" /> {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-primary/10 flex flex-col gap-4">
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                                <Leaf size={12} /> {product.ingredients}
                            </p>

                            <a
                                href={siteConfig.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Button className="w-full justify-center text-sm py-2" variant="primary" icon={<ShoppingBag size={14} />}>
                                    Order Now
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
