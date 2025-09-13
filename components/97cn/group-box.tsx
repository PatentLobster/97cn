import * as React from "react"
import { cn } from "@/lib/utils"

export interface Win95GroupBoxProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  label?: string
}

const Win95GroupBox = React.forwardRef<HTMLFieldSetElement, Win95GroupBoxProps>(
  ({ className, label, children, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        className={cn(
          "border-2 border-win95-button-shadow border-t-win95-button-highlight border-l-win95-button-highlight bg-win95-button-face p-3 pt-2",
          className,
        )}
        {...props}
      >
        {label && <legend className="px-1 text-xs font-sans text-win95-black bg-win95-button-face">{label}</legend>}
        {children}
      </fieldset>
    )
  },
)
Win95GroupBox.displayName = "Win95GroupBox"

export { Win95GroupBox }
