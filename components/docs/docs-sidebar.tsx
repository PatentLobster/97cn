"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Controls",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Command", href: "/docs/components/command" },
      { title: "Input", href: "/docs/components/input" },
      { title: "OTP Input", href: "/docs/components/otp-input" },
      { title: "Progress", href: "/docs/components/progress" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Slider", href: "/docs/components/slider" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Toggle", href: "/docs/components/toggle" },
      { title: "Toggle Group", href: "/docs/components/toggle-group" },
    ],
  },
  {
    title: "Layout",
    items: [
      { title: "Group Box", href: "/docs/components/group-box" },
      { title: "Window", href: "/docs/components/window" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Context Menu", href: "/docs/components/context-menu" },
      { title: "Menu Bar", href: "/docs/components/menu-bar" },
      { title: "Status Bar", href: "/docs/components/status-bar" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Toast", href: "/docs/components/toast" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
  {
    title: "Overlay",
    items: [
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Popover", href: "/docs/components/popover" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:block w-64 shrink-0">
      <div className="sticky top-[48px] bg-win95-button-face win95-sunken m-2 mr-0 p-2 overflow-y-auto max-h-[calc(100vh-56px)]">
        <nav className="space-y-4">
          {sidebarNav.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-bold text-win95-black mb-1.5 px-2">
                {section.title}
              </h4>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block px-2 py-1 text-xs font-sans",
                        isActive
                          ? "bg-win95-highlight text-win95-highlight-text"
                          : "text-win95-black hover:bg-win95-light-gray"
                      )}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
