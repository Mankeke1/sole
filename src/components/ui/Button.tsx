import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2";

    const variants = {
        primary:
            "bg-yellow text-navy hover:bg-[#dca029] hover:-translate-y-0.5 shadow-md shadow-yellow/20",
        secondary:
            "bg-navy text-white hover:bg-deepblue hover:-translate-y-0.5 shadow-md shadow-navy/20",
        outline:
            "border-2 border-white text-white hover:bg-white/10 hover:-translate-y-0.5",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
