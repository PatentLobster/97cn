"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const win95ButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-1 focus:outline-dotted focus:outline-win95-black focus:outline-offset-[-3px] disabled:pointer-events-none disabled:opacity-50 font-sans rounded-none",
  {
    variants: {
      variant: {
        default:
          "bg-win95-button-face text-win95-black win95-raised hover:bg-win95-light-gray active:win95-sunken active:translate-x-[1px] active:translate-y-[1px]",
        primary:
          "bg-win95-button-face text-win95-black win95-raised hover:bg-win95-light-gray active:win95-sunken active:translate-x-[1px] active:translate-y-[1px] border-2 border-win95-black",
        flat: "bg-win95-button-face text-win95-black border border-win95-dark-gray hover:bg-win95-light-gray active:bg-win95-dark-gray",
      },
      size: {
        default: "h-8 px-3 py-1 text-xs",
        sm: "h-7 px-2 text-xs",
        lg: "h-10 px-4 text-sm",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface Win95ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof win95ButtonVariants> {
  asChild?: boolean
}

const Win95Button = React.forwardRef<HTMLButtonElement, Win95ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(win95ButtonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Win95Button.displayName = "Win95Button"

export { Win95Button, win95ButtonVariants }
