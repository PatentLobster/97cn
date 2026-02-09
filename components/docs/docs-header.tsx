"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function DocsHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-win95-button-face win95-raised">
      <div className="max-w-7xl mx-auto flex items-center h-[48px] px-4">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <span className="text-sm font-bold text-win95-black font-sans">97cn</span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            href="/docs"
            className={cn(
              "px-2 py-1 text-xs font-sans",
              pathname.startsWith("/docs")
                ? "bg-win95-highlight text-win95-highlight-text"
                : "text-win95-black hover:bg-win95-light-gray"
            )}
          >
            Docs
          </Link>
          <Link
            href="/docs/components/button"
            className={cn(
              "px-2 py-1 text-xs font-sans",
              pathname.startsWith("/docs/components")
                ? "text-win95-black"
                : "text-win95-dark-gray hover:text-win95-black hover:bg-win95-light-gray"
            )}
          >
            Components
          </Link>
          <a
            href="https://github.com/PatentLobster/97cn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 text-xs font-sans text-win95-black hover:bg-win95-light-gray ml-auto"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
