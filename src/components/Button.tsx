'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'outline' | 'ghost' | 'whatsapp';
    children: ReactNode;
    icon?: ReactNode;
}

export default function Button({ variant = 'primary', children, className, icon, ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300";

    const variants = {
        primary: "bg-gradient-to-r from-primary-light to-primary text-black shadow-[0_4px_15px_rgba(247,185,147,0.4)] hover:shadow-[0_6px_20px_rgba(247,185,147,0.6)] border border-transparent",
        outline: "bg-transparent border border-white/20 hover:bg-white/5 text-white",
        ghost: "bg-transparent text-primary hover:text-primary-light hover:bg-white/5",
        whatsapp: "bg-[#25D366] hover:bg-[#20BA5A] text-black shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] border border-transparent"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
            {icon && <span className="ml-1">{icon}</span>}
        </motion.button>
    );
}
