import * as React from "react"
import { cn } from "@/lib/utils"

export interface Win95InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Win95Input = React.forwardRef<HTMLInputElement, Win95InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-8 w-full bg-win95-white px-2 py-1 text-xs text-win95-black win95-sunken file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-win95-dark-gray focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-win95-black disabled:cursor-not-allowed disabled:opacity-50 font-sans",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Win95Input.displayName = "Win95Input"

export { Win95Input }
