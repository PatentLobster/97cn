import type React from "react"
import { DocsSidebar } from "@/components/docs/docs-sidebar"
import { DocsHeader } from "@/components/docs/docs-header"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-win95-teal">
      <DocsHeader />
      <div className="flex max-w-7xl mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0">
          <div className="bg-win95-button-face win95-sunken m-2 p-6 min-h-[calc(100vh-56px)] overflow-y-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
