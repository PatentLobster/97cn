"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Win95Tabs = TabsPrimitive.Root

const Win95TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-auto items-center justify-start bg-win95-button-face border-b-2 border-win95-button-shadow",
      className,
    )}
    {...props}
  />
))
Win95TabsList.displayName = TabsPrimitive.List.displayName

const Win95TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-xs font-medium bg-win95-button-face text-win95-black border-t-2 border-l-2 border-r-2 border-win95-button-highlight border-r-win95-button-shadow border-b-0 -mb-0.5 relative z-10 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-win95-black disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-win95-button-face data-[state=active]:text-win95-black data-[state=active]:border-b-2 data-[state=active]:border-b-win95-button-face data-[state=active]:z-20",
      className,
    )}
    {...props}
  />
))
Win95TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const Win95TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-0 bg-win95-button-face win95-sunken p-2 text-xs text-win95-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-win95-black",
      className,
    )}
    {...props}
  />
))
Win95TabsContent.displayName = TabsPrimitive.Content.displayName

export { Win95Tabs, Win95TabsList, Win95TabsTrigger, Win95TabsContent }
