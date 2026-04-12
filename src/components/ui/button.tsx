import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  // Base: shared by all variants
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold " +
  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 " +
  "outline-none focus-visible:ring-2 focus-visible:ring-fera-primary/30 " +
  "active:scale-[0.97]",
  {
    variants: {
      variant: {
        // Primary FeRa Blue CTA — the most important button
        primary:
          "bg-fera-deep text-white shadow-luxury hover:bg-fera-primary hover:shadow-luxury-lg tracking-tight",

        // Premium blue — for hero & high-emphasis CTAs (was incorrectly gold gradient)
        premium:
          "bg-fera-deep text-white shadow-luxury hover:bg-fera-primary hover:shadow-luxury-lg tracking-tight",

        // Gold accent — for secondary emphasis (awards, testimonials)
        gold:
          "bg-fera-gold text-white hover:brightness-110 shadow-luxury hover:shadow-luxury-lg",

        // White fill — for use on dark/blue hero sections
        white:
          "bg-white text-fera-deep shadow-luxury hover:bg-fera-off-white hover:shadow-luxury-lg tracking-tight",

        // Bordered outline — blue border, blue text
        outline:
          "border border-fera-primary/40 bg-transparent text-fera-deep " +
          "hover:border-fera-primary hover:bg-fera-primary hover:text-white transition-all",

        // Outlined white — for use on dark/navy hero sections
        "outline-white":
          "border border-white/40 bg-transparent text-white " +
          "hover:border-white hover:bg-white/10 backdrop-blur-sm",

        // Ghost
        ghost:
          "bg-transparent text-fera-deep hover:bg-fera-off-white",

        // Text link
        link:
          "bg-transparent p-0 text-fera-primary underline-offset-4 hover:underline shadow-none tracking-tight",

        // Secondary / subtle
        secondary:
          "bg-fera-off-white text-fera-deep border border-fera-border " +
          "hover:border-fera-primary/30 hover:shadow-luxury hover:bg-white",
      },
      size: {
        sm:      "h-9  px-4  rounded-lg  text-xs",
        default: "h-11 px-6  rounded-xl  text-sm",
        lg:      "h-14 px-8  rounded-xl  text-base",
        xl:      "h-16 px-10 rounded-2xl text-base tracking-tight",
        icon:    "h-10 w-10 rounded-xl",
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