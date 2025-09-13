"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X, Minus, Square } from "lucide-react"

interface Win95WindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  active?: boolean
  resizable?: boolean
  minimizable?: boolean
  maximizable?: boolean
  closable?: boolean
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
  menuBar?: React.ReactNode
  statusBar?: React.ReactNode
}

const Win95Window = React.forwardRef<HTMLDivElement, Win95WindowProps>(
  (
    {
      className,
      title = "Window",
      active = true,
      resizable = true,
      minimizable = true,
      maximizable = true,
      closable = true,
      onClose,
      onMinimize,
      onMaximize,
      children,
      menuBar,
      statusBar,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("bg-win95-button-face win95-raised min-w-64 min-h-32 flex flex-col", className)}
        {...props}
      >
        {/* Title Bar */}
        <div
          className={cn(
            "flex items-center justify-between px-1 py-0.5 text-xs font-bold select-none flex-shrink-0",
            active ? "bg-win95-active-title text-white" : "bg-win95-inactive-title text-win95-inactive-title-text",
          )}
        >
          <span className="px-1 truncate">{title}</span>
          <div className="flex items-center gap-0.5">
            {minimizable && (
              <button
                onClick={onMinimize}
                className="w-4 h-3 bg-win95-button-face win95-raised hover:bg-win95-light-gray active:win95-sunken flex items-center justify-center"
              >
                <Minus className="w-2 h-2 text-black" />
              </button>
            )}
            {maximizable && (
              <button
                onClick={onMaximize}
                className="w-4 h-3 bg-win95-button-face win95-raised hover:bg-win95-light-gray active:win95-sunken flex items-center justify-center"
              >
                <Square className="w-2 h-2 text-black" />
              </button>
            )}
            {closable && (
              <button
                onClick={onClose}
                className="w-4 h-3 bg-win95-button-face win95-raised hover:bg-win95-light-gray active:win95-sunken flex items-center justify-center"
              >
                <X className="w-2 h-2 text-black" />
              </button>
            )}
          </div>
        </div>

        {/* Menu Bar - Fixed at top */}
        {menuBar && <div className="flex-shrink-0">{menuBar}</div>}

        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 p-2 overflow-auto win95-scrollbar">{children}</div>
        </div>

        {statusBar && <div className="flex-shrink-0">{statusBar}</div>}

        {/* Resize Handle */}
        {resizable && (
          <div className="absolute bottom-0 right-0 w-3 h-3 cursor-se-resize">
            <div className="w-full h-full bg-win95-button-face win95-raised"></div>
          </div>
        )}
      </div>
    )
  },
)
Win95Window.displayName = "Win95Window"

export { Win95Window }
