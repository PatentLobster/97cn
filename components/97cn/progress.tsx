"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Win95Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const totalSegments = 20
  const filledSegments = Math.floor(((value || 0) / 100) * totalSegments)

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative h-6 w-full overflow-hidden bg-win95-white win95-sunken rounded-none", className)}
      {...props}
    >
      <div className="flex h-full gap-[1px] p-[1px]">
        {Array.from({ length: totalSegments }, (_, i) => (
          <div
            key={i}
            className={cn("flex-1 h-full rounded-none", i < filledSegments ? "bg-win95-navy" : "bg-transparent")}
          />
        ))}
      </div>
    </ProgressPrimitive.Root>
  )
})
Win95Progress.displayName = ProgressPrimitive.Root.displayName

export { Win95Progress }
