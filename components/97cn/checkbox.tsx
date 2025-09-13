"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const Win95Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 bg-win95-white win95-sunken focus-visible:outline-none focus:outline-1 focus:outline-dotted focus:outline-win95-black focus:outline-offset-[-2px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-win95-white data-[state=checked]:text-win95-black rounded-none",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-3 w-3 stroke-[3]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Win95Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Win95Checkbox }
