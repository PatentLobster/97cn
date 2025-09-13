"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

const Win95Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn("flex h-full w-full flex-col overflow-hidden bg-win95-white win95-sunken border-0", className)}
    {...props}
  />
))
Win95Command.displayName = CommandPrimitive.displayName

const Win95CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center bg-win95-white px-3 py-2 border-b border-win95-dark-gray" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 text-win95-dark-gray" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-5 w-full bg-transparent text-sm font-sans text-win95-black outline-none placeholder:text-win95-dark-gray disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
))
Win95CommandInput.displayName = CommandPrimitive.Input.displayName

const Win95CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden bg-win95-white", className)}
    {...props}
  />
))
Win95CommandList.displayName = CommandPrimitive.List.displayName

const Win95CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={cn("py-6 text-center text-xs text-win95-dark-gray", className)}
    {...props}
  />
))
Win95CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const Win95CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden text-win95-black [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-win95-black [&_[cmdk-group-heading]]:bg-win95-button-face [&_[cmdk-group-heading]]:border-b [&_[cmdk-group-heading]]:border-win95-dark-gray",
      className,
    )}
    {...props}
  />
))
Win95CommandGroup.displayName = CommandPrimitive.Group.displayName

const Win95CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("h-px bg-win95-dark-gray mx-1 my-1", className)} {...props} />
))
Win95CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const Win95CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center px-3 py-2 text-sm font-sans text-win95-black outline-none aria-selected:bg-win95-highlight aria-selected:text-win95-highlight-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-win95-light-gray",
      className,
    )}
    {...props}
  />
))
Win95CommandItem.displayName = CommandPrimitive.Item.displayName

const Win95CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-win95-dark-gray", className)} {...props} />
}
Win95CommandShortcut.displayName = "Win95CommandShortcut"

const Win95CommandDialog = ({ children, ...props }: React.ComponentProps<typeof CommandPrimitive.Dialog>) => {
  return (
    <CommandPrimitive.Dialog
      {...props}
      className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    >
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-win95-button-face win95-raised shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
        {children}
      </div>
    </CommandPrimitive.Dialog>
  )
}
Win95CommandDialog.displayName = "Win95CommandDialog"

export {
  Win95Command,
  Win95CommandInput,
  Win95CommandList,
  Win95CommandEmpty,
  Win95CommandGroup,
  Win95CommandItem,
  Win95CommandShortcut,
  Win95CommandSeparator,
  Win95CommandDialog,
}
