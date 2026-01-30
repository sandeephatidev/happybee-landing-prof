'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
    {
        id: 1,
        name: "The Chutney Club",
        logo: "/tcc-logo.png",
        description: "Fresh salads with chutneys and masala toppings, crafted for health-conscious individuals"
    },
    {
        id: 2,
        name: "Urthwise",
        logo: "/uw-logo.png",
        description: "Healthy flavoured nuts, cold-pressed oils and nutrient-rich blends for a healthier, sustainable lifestyle"
    },
    {
        id: 3,
        name: "Sproutio",
        logo: "/so-logo.png",
        description: "Organic sprouted seeds and wholesome snacks packed with natural nutrition"
    }
];

export default function Brands() {
    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background gradient decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">Trusted Partners</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Leading Brands</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Premium quality products from our carefully selected brand partners</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {brands.map((brand, idx) => (
                        <motion.div
                            key={brand.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            
                            <div className="relative flex flex-col items-center justify-center p-10 bg-accent rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105">
                                {/* Logo Container */}
                                <div className="relative w-32 h-32 mb-6 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        width={120}
                                        height={120}
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                
                                {/* Brand Name */}
                                <h3 className="text-2xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                                    {brand.name}
                                </h3>
                                
                                {/* Decorative line */}
                                <div className="w-12 h-1 bg-gradient-to-r from-primary to-yellow-400 rounded-full mt-4 group-hover:w-16 transition-all duration-300" />
                                
                                {/* Description */}
                                <p className="text-sm text-gray-600 text-center mt-4 group-hover:text-gray-700 transition-colors duration-300">
                                    {brand.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
