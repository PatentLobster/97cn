"use client"

import { Win95Button } from "@/components/97cn/button"
import { Win95Window } from "@/components/97cn/window"

interface AboutDialogProps {
  onClose: () => void
}

export function AboutDialog({ onClose }: AboutDialogProps) {
  return (
    <Win95Window title="About 97cn" className="w-96 max-h-96" onClose={onClose}>
      <div className="flex flex-col h-full max-h-80">
        <div className="text-center space-y-3 flex-shrink-0">
          <div className="text-2xl font-bold text-win95-black">97cn</div>
          <div className="text-xs text-win95-black space-y-1">
            <p>Windows 95 Component Registry</p>
            <p>Version 0.1</p>
            <p>Built with React, Next.js, and Tailwind CSS</p>
          </div>
        </div>

        <div className="bg-win95-white win95-sunken p-3 text-xs text-win95-black text-left flex-1 overflow-y-auto my-3 min-h-0">
          <div className="space-y-3">
            <p className="leading-relaxed">
              97cn is a collection of Windows 95 styled components built with modern web technologies. It provides
              authentic retro UI components that follow the classic Windows 95 design language while maintaining
              accessibility and modern development practices.
            </p>
            <p className="leading-relaxed">
              Install components using the shadcn CLI or copy the code directly from the registry at itzik.co/r/
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-shrink-0">
          <Win95Button onClick={onClose}>OK</Win95Button>
        </div>
      </div>
    </Win95Window>
  )
}
