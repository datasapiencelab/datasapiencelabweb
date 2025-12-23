import Spark from "./Spark";

interface SectionKickerProps {
    children: string;
    variant?: "dark" | "light";
}

export default function SectionKicker({
    children,
    variant = "dark",
}: SectionKickerProps) {
    return (
        <div className="flex items-center gap-2">
            <div
                className={`w-6 h-6 flex items-center justify-center ${
                    variant === "dark" ? "text-white" : "text-brand-primary"
                }`}
            >
                <Spark />
            </div>
            <span
                className={`text-body-xl tracking-[0.5px] font-geist ${
                    variant === "dark" ? "text-white" : "text-neutral-primary"
                }`}
            >
                {children}
            </span>
        </div>
    );
}
