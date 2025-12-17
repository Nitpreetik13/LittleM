import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref) => {
    return (
        <button
            disabled={disabled}
            ref={ref}
            {...props}
            className={cn(
                "inline-flex w-auto items-center justify-center rounded-full bg-[#FF8A80] px-5 py-3 text-sm font-semibold text-white shadow-sm transition",
                "hover:bg-[#FF6F61] hover:shadow-md",
                "disabled:cursor-not-allowed disabled:opacity-60",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF8A80]",
                className,
            )}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
export default Button;
