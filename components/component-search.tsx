"use client"

import * as React from "react"
import { Search } from "lucide-react"
import {
  Win95Command,
  Win95CommandDialog,
  Win95CommandEmpty,
  Win95CommandGroup,
  Win95CommandInput,
  Win95CommandItem,
  Win95CommandList,
} from "@/components/97cn/command"

interface ComponentSearchProps {
  onSelectComponent: (componentName: string) => void
}

const components = [
  { name: "Button", category: "Controls" },
  { name: "Checkbox", category: "Controls" },
  { name: "Input", category: "Controls" },
  { name: "Textarea", category: "Controls" },
  { name: "Select", category: "Controls" },
  { name: "Radio Group", category: "Controls" },
  { name: "Progress", category: "Controls" },
  { name: "Slider", category: "Controls" },
  { name: "Command", category: "Controls" },
  { name: "Window", category: "Layout" },
  { name: "Group Box", category: "Layout" },
  { name: "Menu Bar", category: "Navigation" },
  { name: "Status Bar", category: "Navigation" },
  { name: "Context Menu", category: "Navigation" },
]

export function ComponentSearch({ onSelectComponent }: ComponentSearchProps) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (componentName: string) => {
    setOpen(false)
    onSelectComponent(componentName)
  }

  return (
    <Win95CommandDialog open={open} onOpenChange={setOpen}>
      <Win95Command className="rounded-none border-0">
        <Win95CommandInput placeholder="Search components..." />
        <Win95CommandList>
          <Win95CommandEmpty>No components found.</Win95CommandEmpty>
          <Win95CommandGroup heading="Controls">
            {components
              .filter((c) => c.category === "Controls")
              .map((component) => (
                <Win95CommandItem key={component.name} onSelect={() => handleSelect(component.name)}>
                  <Search className="mr-2 h-3 w-3" />
                  {component.name}
                </Win95CommandItem>
              ))}
          </Win95CommandGroup>
          <Win95CommandGroup heading="Layout">
            {components
              .filter((c) => c.category === "Layout")
              .map((component) => (
                <Win95CommandItem key={component.name} onSelect={() => handleSelect(component.name)}>
                  <Search className="mr-2 h-3 w-3" />
                  {component.name}
                </Win95CommandItem>
              ))}
          </Win95CommandGroup>
          <Win95CommandGroup heading="Navigation">
            {components
              .filter((c) => c.category === "Navigation")
              .map((component) => (
                <Win95CommandItem key={component.name} onSelect={() => handleSelect(component.name)}>
                  <Search className="mr-2 h-3 w-3" />
                  {component.name}
                </Win95CommandItem>
              ))}
          </Win95CommandGroup>
        </Win95CommandList>
      </Win95Command>
    </Win95CommandDialog>
  )
}
