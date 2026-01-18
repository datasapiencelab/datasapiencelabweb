import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    className?: string;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    variant = "primary",
    size = "medium",
    onClick,
    className = "",
    fullWidth = false,
    type = "button",
}: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center gap-1.5 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary:
            "bg-brand-primary text-white hover:bg-opacity-90 focus:ring-brand-primary",
        secondary:
            "bg-white text-neutral-primary border border-neutral-primary hover:bg-neutral-primary hover:text-white",
        ghost: "bg-transparent text-current hover:bg-white hover:bg-opacity-10",
        outline:
            "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary",
    };

    const sizeClasses = {
        small: "px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm",
        medium: "px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-body-lg",
        large: "px-3 md:px-4.5 py-2 md:py-3 text-sm md:text-body-lg",
    };

    const widthClass = fullWidth ? "w-full" : "";

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
            {variant === "primary" && (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="-rotate-45"
                >
                    <path
                        d="M4 10h12m-6-6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </button>
    );
}
