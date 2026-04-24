import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  // Base: shared by all variants
  "inline-flex items-center justify-center gap-3 whitespace-nowrap font-bold " +
  "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "btn-premium-hover active-press " +
  "outline-none focus-visible:ring-2 focus-visible:ring-fera-primary/30",
  {
    variants: {
      variant: {
        // Primary FeRa Blue CTA
        primary:
          "bg-fera-deep text-white shadow-luxury hover:bg-fera-primary hover:shadow-luxury-lg tracking-tight",

        // Premium blue — for hero & high-emphasis CTAs
        premium:
          "bg-fera-deep text-white shadow-luxury hover:bg-fera-primary hover:shadow-luxury-lg tracking-tight",

        // Gold accent — for secondary emphasis
        gold:
          "bg-fera-gold text-white hover:brightness-110 shadow-luxury hover:shadow-luxury-lg",

        // White fill — for use on dark/blue sections
        white:
          "bg-white text-fera-deep shadow-luxury hover:bg-fera-surface hover:shadow-luxury-lg tracking-tight",

        // Bordered outline
        outline:
          "border border-fera-primary/20 bg-transparent text-fera-deep " +
          "hover:border-fera-primary hover:bg-fera-deep hover:text-white",

        // Outlined white — for use on dark hero sections
        "outline-white":
          "border border-white/30 bg-transparent text-white " +
          "hover:border-white hover:bg-white/10 backdrop-blur-sm",

        // Ghost
        ghost:
          "bg-transparent text-fera-deep hover:bg-fera-surface",

        // Text link
        link:
          "bg-transparent p-0 text-fera-primary underline-offset-4 hover:underline shadow-none tracking-tight hover:-translate-y-0",

        // Secondary / subtle
        secondary:
          "bg-fera-surface/50 text-fera-deep border border-fera-border/50 " +
          "hover:border-fera-primary/30 hover:bg-white hover:shadow-luxury-md",
      },
      size: {
        sm:      "h-10 px-5  rounded-xl  text-[11px] uppercase tracking-widest",
        default: "h-12 px-7  rounded-2xl  text-sm tracking-tight",
        lg:      "h-14 px-9  rounded-2xl  text-base tracking-tight",
        xl:      "h-16 px-12 rounded-[1.5rem] text-lg tracking-tight",
        icon:    "h-12 w-12 rounded-2xl",
      },
      fullWidth: {
        true:  "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant:   "primary",
      size:      "default",
      fullWidth: false,
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  fullWidth,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    fullWidth?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };