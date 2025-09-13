import * as React from "react"
import { cn } from "@/lib/utils"

export interface Win95TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Win95Textarea = React.forwardRef<HTMLTextAreaElement, Win95TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-20 w-full bg-win95-white px-2 py-1 text-xs text-win95-black win95-sunken placeholder:text-win95-dark-gray focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-win95-black disabled:cursor-not-allowed disabled:opacity-50 font-sans resize-none",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Win95Textarea.displayName = "Win95Textarea"

export { Win95Textarea }
