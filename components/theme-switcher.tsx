"use client"

import { useState, useEffect } from "react"
import { Win95Button } from "@/components/97cn/button"
import { Win95Window } from "@/components/97cn/window"
import { Win95GroupBox } from "@/components/97cn/group-box"
import { Win95RadioGroup, Win95RadioGroupItem } from "@/components/97cn/radio-group"

interface ThemeSwitcherProps {
  onClose: () => void
}

export function ThemeSwitcher({ onClose }: ThemeSwitcherProps) {
  const [selectedTheme, setSelectedTheme] = useState("classic")

  useEffect(() => {
    const currentTheme = document.documentElement.className.includes("theme-high-contrast")
      ? "high-contrast"
      : document.documentElement.className.includes("theme-desert")
        ? "desert"
        : "classic"
    setSelectedTheme(currentTheme)
  }, [])

  const themes = [
    { id: "classic", name: "Windows 95 Classic", description: "The original Windows 95 color scheme" },
    { id: "high-contrast", name: "High Contrast", description: "High contrast theme for accessibility" },
    { id: "desert", name: "Desert", description: "Warm desert color palette" },
  ]

  const applyTheme = () => {
    const root = document.documentElement
    // Remove existing theme classes
    root.classList.remove("theme-high-contrast", "theme-desert")

    // Apply new theme class
    if (selectedTheme === "high-contrast") {
      root.classList.add("theme-high-contrast")
    } else if (selectedTheme === "desert") {
      root.classList.add("theme-desert")
    }
    // classic theme is the default (no class needed)

    // Store theme preference
    localStorage.setItem("97cn-theme", selectedTheme)
  }

  const handleOk = () => {
    applyTheme()
    onClose()
  }

  return (
    <Win95Window title="Display Properties" className="w-96 h-80" onClose={onClose}>
      <div className="space-y-4">
        <Win95GroupBox label="Color Scheme">
          <Win95RadioGroup value={selectedTheme} onValueChange={setSelectedTheme}>
            {themes.map((theme) => (
              <div key={theme.id} className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Win95RadioGroupItem value={theme.id} id={theme.id} />
                  <label htmlFor={theme.id} className="text-xs font-sans text-win95-black cursor-pointer">
                    {theme.name}
                  </label>
                </div>
                <p className="text-xs text-win95-dark-gray ml-6">{theme.description}</p>
              </div>
            ))}
          </Win95RadioGroup>
        </Win95GroupBox>

        <div className="flex justify-end gap-2">
          <Win95Button onClick={handleOk}>OK</Win95Button>
          <Win95Button onClick={onClose}>Cancel</Win95Button>
          <Win95Button onClick={applyTheme}>Apply</Win95Button>
        </div>
      </div>
    </Win95Window>
  )
}
