"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

const Win95ContextMenu = ContextMenuPrimitive.Root

const Win95ContextMenuTrigger = ContextMenuPrimitive.Trigger

const Win95ContextMenuGroup = ContextMenuPrimitive.Group

const Win95ContextMenuPortal = ContextMenuPrimitive.Portal

const Win95ContextMenuSub = ContextMenuPrimitive.Sub

const Win95ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const Win95ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center px-2 py-1.5 text-xs font-sans text-win95-black outline-none focus:bg-win95-highlight focus:text-win95-highlight-text data-[state=open]:bg-win95-highlight data-[state=open]:text-win95-highlight-text",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-3 w-3" />
  </ContextMenuPrimitive.SubTrigger>
))
Win95ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const Win95ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden bg-win95-button-face win95-raised p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
))
Win95ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const Win95ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden bg-win95-button-face win95-raised p-1 shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
Win95ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const Win95ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center px-2 py-1.5 text-xs font-sans text-win95-black outline-none focus:bg-win95-highlight focus:text-win95-highlight-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
))
Win95ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const Win95ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-xs font-sans text-win95-black outline-none focus:bg-win95-highlight focus:text-win95-highlight-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-3 w-3" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
Win95ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName

const Win95ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-xs font-sans text-win95-black outline-none focus:bg-win95-highlight focus:text-win95-highlight-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
Win95ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const Win95ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-xs font-bold text-win95-dark-gray", inset && "pl-8", className)}
    {...props}
  />
))
Win95ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const Win95ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-win95-dark-gray", className)}
    {...props}
  />
))
Win95ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const Win95ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-win95-dark-gray", className)} {...props} />
}
Win95ContextMenuShortcut.displayName = "Win95ContextMenuShortcut"

export {
  Win95ContextMenu,
  Win95ContextMenuTrigger,
  Win95ContextMenuContent,
  Win95ContextMenuItem,
  Win95ContextMenuCheckboxItem,
  Win95ContextMenuRadioItem,
  Win95ContextMenuLabel,
  Win95ContextMenuSeparator,
  Win95ContextMenuShortcut,
  Win95ContextMenuGroup,
  Win95ContextMenuPortal,
  Win95ContextMenuSub,
  Win95ContextMenuSubContent,
  Win95ContextMenuSubTrigger,
  Win95ContextMenuRadioGroup,
}
