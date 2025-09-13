import * as React from "react"
import { cn } from "@/lib/utils"

interface Win95StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface Win95StatusPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  sunken?: boolean
}

const Win95StatusBar = React.forwardRef<HTMLDivElement, Win95StatusBarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center bg-win95-button-face border-t border-win95-button-highlight px-1 py-0.5 gap-1 h-6",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Win95StatusBar.displayName = "Win95StatusBar"

const Win95StatusPanel = React.forwardRef<HTMLDivElement, Win95StatusPanelProps>(
  ({ className, children, sunken = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-1.5 py-0 text-xs font-sans text-win95-black h-5 flex items-center",
          sunken ? "win95-sunken bg-win95-white" : "bg-win95-button-face",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Win95StatusPanel.displayName = "Win95StatusPanel"

export { Win95StatusBar, Win95StatusPanel }
