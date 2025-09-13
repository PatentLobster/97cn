"use client"

import { useState } from "react"
import { Win95Button } from "@/components/97cn/button"
import { Win95Input } from "@/components/97cn/input"
import { Win95Window } from "@/components/97cn/window"
import { Win95GroupBox } from "@/components/97cn/group-box"

interface SearchDialogProps {
  onClose: () => void
  onSearch: (query: string) => void
}

export function SearchDialog({ onClose, onSearch }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    onSearch(searchQuery)
    onClose()
  }

  return (
    <Win95Window title="Find Component" className="w-80 h-48" onClose={onClose}>
      <div className="space-y-4">
        <Win95GroupBox label="Search">
          <div className="space-y-2">
            <label className="text-xs font-sans text-win95-black">Component name:</label>
            <Win95Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter component name..."
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
        </Win95GroupBox>

        <div className="flex justify-end gap-2">
          <Win95Button onClick={handleSearch} disabled={!searchQuery.trim()}>
            Find
          </Win95Button>
          <Win95Button onClick={onClose}>Cancel</Win95Button>
        </div>
      </div>
    </Win95Window>
  )
}
