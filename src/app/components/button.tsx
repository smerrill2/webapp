// button.tsx
'use client';
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        sm: "h-9 px-2 rounded-md text-sm",
        md: "h-10 py-2 px-4 text-sm", // Default medium size
        lg: "h-11 px-8 rounded-md text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md", // Set the default to medium
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";
    
    // State to hold the button size
    const [responsiveSize, setResponsiveSize] = React.useState<"sm" | "md" | "lg">("md");

    // Effect to handle responsive sizing
    React.useEffect(() => {
      const getButtonSize = (): "sm" | "md" | "lg" => {
        if (typeof window === "undefined") return "md"; // Fallback to default size on SSR
        const width = window.innerWidth;
        if (width < 640) return "sm";  // Tailwind's sm breakpoint
        if (width < 768) return "md";   // Tailwind's md breakpoint
        return "lg";                     // Tailwind's lg breakpoint
      };

      const updateButtonSize = () => {
        setResponsiveSize(getButtonSize());
      };

      updateButtonSize(); // Initial size check

      window.addEventListener("resize", updateButtonSize); // Update size on resize
      return () => window.removeEventListener("resize", updateButtonSize); // Cleanup
    }, []);

    return (
      <Comp
        className={cn(buttonVariants({ variant, size: responsiveSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };