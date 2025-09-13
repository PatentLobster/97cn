"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface OTPInputProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onChange?: (value: string) => void
  length?: number
  disabled?: boolean
}

const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>(
  ({ className, value = "", onChange, length = 6, disabled, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value)
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

    React.useEffect(() => {
      setInternalValue(value)
    }, [value])

    const handleChange = (index: number, newValue: string) => {
      if (newValue.length > 1) {
        // Handle paste
        const pastedValue = newValue.slice(0, length)
        setInternalValue(pastedValue)
        onChange?.(pastedValue)

        // Focus the last filled input or the next empty one
        const nextIndex = Math.min(pastedValue.length, length - 1)
        inputRefs.current[nextIndex]?.focus()
        return
      }

      const newOTP = internalValue.split("")
      newOTP[index] = newValue
      const result = newOTP.join("").slice(0, length)

      setInternalValue(result)
      onChange?.(result)

      // Move to next input if value was entered
      if (newValue && index < length - 1) {
        inputRefs.current[index + 1]?.focus()
      }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !internalValue[index] && index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
      if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
      if (e.key === "ArrowRight" && index < length - 1) {
        inputRefs.current[index + 1]?.focus()
      }
    }

    return (
      <div ref={ref} className={cn("flex gap-2", className)} {...props}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={internalValue[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            disabled={disabled}
            className={cn(
              "w-10 h-10 text-center text-xs font-mono",
              "win95-sunken bg-win95-white border-2 text-win95-black rounded-none",
              "focus:outline-none focus:outline-1 focus:outline-dotted focus:outline-win95-black focus:outline-offset-[-3px]",
              "disabled:bg-win95-button-face disabled:text-win95-dark-gray",
              className,
            )}
          />
        ))}
      </div>
    )
  },
)
OTPInput.displayName = "OTPInput"

export { OTPInput }
