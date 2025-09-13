"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Win95MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface Win95MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  active?: boolean
}

const Win95MenuBar = React.forwardRef<HTMLDivElement, Win95MenuBarProps>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center bg-win95-button-face border-b border-win95-button-shadow px-1", className)}
      {...props}
    >
      {children}
    </div>
  )
})
Win95MenuBar.displayName = "Win95MenuBar"

const Win95MenuItem = React.forwardRef<HTMLButtonElement, Win95MenuItemProps>(
  ({ className, children, active = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-2 py-1 text-xs font-sans text-win95-black hover:bg-win95-highlight hover:text-win95-highlight-text focus:outline-none",
          active && "bg-win95-highlight text-win95-highlight-text",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Win95MenuItem.displayName = "Win95MenuItem"

export { Win95MenuBar, Win95MenuItem }
