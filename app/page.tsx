"use client"

import { useState, useEffect } from "react"
import { Win95Window } from "@/components/97cn/window"
import { Win95MenuBar, Win95MenuItem } from "@/components/97cn/menu-bar"
import { Win95StatusBar, Win95StatusPanel } from "@/components/97cn/status-bar"
import { ComponentShowcase } from "@/components/component-showcase"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { AboutDialog } from "@/components/about-dialog"
import { SearchDialog } from "@/components/search-dialog"
import { ComponentSearch } from "@/components/component-search"

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("button")
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false)
  const [showAboutDialog, setShowAboutDialog] = useState(false)
  const [showSearchDialog, setShowSearchDialog] = useState(false)
  const [searchFilter, setSearchFilter] = useState("")
  const [showKeyboardHint, setShowKeyboardHint] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("97cn-theme")
    if (savedTheme) {
      const root = document.documentElement
      root.classList.remove("theme-high-contrast", "theme-desert")
      if (savedTheme === "high-contrast") {
        root.classList.add("theme-high-contrast")
      } else if (savedTheme === "desert") {
        root.classList.add("theme-desert")
      }
    }

    const timer = setTimeout(() => {
      setShowKeyboardHint(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const components = [
    { id: "button", name: "Button", category: "Controls" },
    { id: "checkbox", name: "Checkbox", category: "Controls" },
    { id: "input", name: "Input", category: "Controls" },
    { id: "textarea", name: "Textarea", category: "Controls" },
    { id: "select", name: "Select", category: "Controls" },
    { id: "radio-group", name: "Radio Group", category: "Controls" },
    { id: "progress", name: "Progress", category: "Controls" },
    { id: "slider", name: "Slider", category: "Controls" },
    { id: "command", name: "Command", category: "Controls" },
    { id: "tabs", name: "Tabs", category: "Controls" },
    { id: "otp-input", name: "OTP Input", category: "Controls" },
    { id: "switch", name: "Switch", category: "Controls" },
    { id: "toggle", name: "Toggle", category: "Controls" },
    { id: "toggle-group", name: "Toggle Group", category: "Controls" },
    { id: "window", name: "Window", category: "Layout" },
    { id: "group-box", name: "Group Box", category: "Layout" },
    { id: "menu-bar", name: "Menu Bar", category: "Navigation" },
    { id: "status-bar", name: "Status Bar", category: "Navigation" },
    { id: "context-menu", name: "Context Menu", category: "Navigation" },
    { id: "toast", name: "Toast", category: "Feedback" },
    { id: "tooltip", name: "Tooltip", category: "Feedback" },
    { id: "skeleton", name: "Skeleton", category: "Feedback" },
    { id: "popover", name: "Popover", category: "Overlay" },
    { id: "dialog", name: "Dialog", category: "Overlay" },
  ]

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchFilter.toLowerCase()),
  )

  const categories = Array.from(new Set(filteredComponents.map((c) => c.category)))

  const handleSearch = (query: string) => {
    setSearchFilter(query)
    const foundComponent = components.find((c) => c.name.toLowerCase().includes(query.toLowerCase()))
    if (foundComponent) {
      setActiveComponent(foundComponent.id)
    }
  }

  const handleComponentSelect = (componentName: string) => {
    const component = components.find((c) => c.name === componentName)
    if (component) {
      setActiveComponent(component.id)
      setSearchFilter("") // Clear any existing search filter
    }
  }

  return (
    <div className="min-h-screen bg-win95-teal p-4 relative">
      <Win95Window
        title="97cn - Windows 95 Component Registry"
        className="w-full max-w-6xl mx-auto h-[90vh]"
        statusBar={
          <Win95StatusBar>
            <Win95StatusPanel className="flex-1">
              {showKeyboardHint
                ? "Press Ctrl+K to search components"
                : searchFilter
                  ? `Showing results for "${searchFilter}"`
                  : "Ready"}
            </Win95StatusPanel>
            <Win95StatusPanel sunken={false}>
              Component: {components.find((c) => c.id === activeComponent)?.name}
            </Win95StatusPanel>
            <Win95StatusPanel sunken={false}>97cn v0.1</Win95StatusPanel>
          </Win95StatusBar>
        }
      >
        {/* Menu Bar */}
        <Win95MenuBar>
          <Win95MenuItem onClick={() => setShowSearchDialog(true)}>File</Win95MenuItem>
          <Win95MenuItem>Edit</Win95MenuItem>
          <Win95MenuItem onClick={() => setShowThemeSwitcher(true)}>View</Win95MenuItem>
          <Win95MenuItem onClick={() => setShowAboutDialog(true)}>Help</Win95MenuItem>
        </Win95MenuBar>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 bg-win95-button-face win95-sunken p-2 overflow-y-auto">
            <div className="space-y-4">
              {searchFilter && (
                <div className="mb-4">
                  <div className="text-xs text-win95-black mb-2">
                    Search results for "{searchFilter}"
                    <button onClick={() => setSearchFilter("")} className="ml-2 text-win95-blue hover:underline">
                      Clear
                    </button>
                  </div>
                </div>
              )}
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-xs font-bold text-win95-black mb-2 px-1">{category}</h3>
                  <div className="space-y-1">
                    {filteredComponents
                      .filter((c) => c.category === category)
                      .map((component) => (
                        <button
                          key={component.id}
                          onClick={() => setActiveComponent(component.id)}
                          className={`w-full text-left px-2 py-1 text-xs font-sans rounded-none ${
                            activeComponent === component.id
                              ? "bg-win95-highlight text-win95-highlight-text"
                              : "text-win95-black hover:bg-win95-light-gray"
                          }`}
                        >
                          {component.name}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Component Display Area */}
          <div className="flex-1 bg-win95-white win95-sunken m-2 p-4 overflow-y-auto">
            <ComponentShowcase componentId={activeComponent} />
          </div>
        </div>
      </Win95Window>

      <ComponentSearch onSelectComponent={handleComponentSelect} />

      {/* Dialogs */}
      {showThemeSwitcher && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <ThemeSwitcher onClose={() => setShowThemeSwitcher(false)} />
        </div>
      )}

      {showAboutDialog && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <AboutDialog onClose={() => setShowAboutDialog(false)} />
        </div>
      )}

      {showSearchDialog && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <SearchDialog onClose={() => setShowSearchDialog(false)} onSearch={handleSearch} />
        </div>
      )}
    </div>
  )
}
