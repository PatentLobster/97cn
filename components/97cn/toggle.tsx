"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-none text-sm font-medium transition-colors hover:bg-win95-light-gray focus-visible:outline-none focus:outline-1 focus:outline-dotted focus:outline-win95-black focus:outline-offset-[-3px] disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-win95-light-gray font-sans",
  {
    variants: {
      variant: {
        default: "win95-raised bg-win95-button-face text-win95-black data-[state=on]:win95-sunken",
        outline:
          "border border-win95-dark-gray bg-transparent hover:bg-win95-light-gray data-[state=on]:bg-win95-light-gray text-win95-black",
      },
      size: {
        default: "h-10 px-3 text-xs",
        sm: "h-9 px-2.5 text-xs",
        lg: "h-11 px-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
