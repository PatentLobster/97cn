"use client"

import { useState, useEffect } from "react"
import { mdxComponents } from "./mdx-components"
import { InstallationTabs } from "@/components/installation-tabs"
import { OpenInV0Button } from "@/components/docs/open-in-v0-button"

const componentMetadata: Record<
  string,
  { title: string; description: string; dependencies: string[] }
> = {
  button: {
    title: "Button",
    description:
      "Windows 95 styled button component with multiple variants.",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
  },
  checkbox: {
    title: "Checkbox",
    description: "Windows 95 styled checkbox component.",
    dependencies: ["@radix-ui/react-checkbox"],
  },
  command: {
    title: "Command",
    description: "Windows 95 styled command palette component.",
    dependencies: ["cmdk"],
  },
  "context-menu": {
    title: "Context Menu",
    description:
      "Windows 95 styled context menu with right-click support.",
    dependencies: ["@radix-ui/react-context-menu"],
  },
  dialog: {
    title: "Dialog",
    description: "Windows 95 styled modal dialog component.",
    dependencies: ["@radix-ui/react-dialog"],
  },
  "group-box": {
    title: "Group Box",
    description:
      "Windows 95 styled group box container with an optional label.",
    dependencies: [],
  },
  input: {
    title: "Input",
    description: "Windows 95 styled text input component.",
    dependencies: [],
  },
  "menu-bar": {
    title: "Menu Bar",
    description: "Windows 95 styled menu bar for window applications.",
    dependencies: [],
  },
  "otp-input": {
    title: "OTP Input",
    description: "Windows 95 styled one-time password input component.",
    dependencies: [],
  },
  popover: {
    title: "Popover",
    description: "Windows 95 styled popover component.",
    dependencies: ["@radix-ui/react-popover"],
  },
  progress: {
    title: "Progress",
    description: "Windows 95 styled progress bar component.",
    dependencies: ["@radix-ui/react-progress"],
  },
  "radio-group": {
    title: "Radio Group",
    description: "Windows 95 styled radio group component.",
    dependencies: ["@radix-ui/react-radio-group"],
  },
  select: {
    title: "Select",
    description: "Windows 95 styled select dropdown component.",
    dependencies: ["@radix-ui/react-select"],
  },
  skeleton: {
    title: "Skeleton",
    description: "Windows 95 styled skeleton loading placeholder.",
    dependencies: [],
  },
  slider: {
    title: "Slider",
    description: "Windows 95 styled slider component.",
    dependencies: ["@radix-ui/react-slider"],
  },
  "status-bar": {
    title: "Status Bar",
    description:
      "Windows 95 styled status bar for window applications.",
    dependencies: [],
  },
  switch: {
    title: "Switch",
    description: "Windows 95 styled switch toggle component.",
    dependencies: ["@radix-ui/react-switch"],
  },
  tabs: {
    title: "Tabs",
    description: "Windows 95 styled tabs component.",
    dependencies: ["@radix-ui/react-tabs"],
  },
  textarea: {
    title: "Textarea",
    description: "Windows 95 styled textarea component.",
    dependencies: [],
  },
  toast: {
    title: "Toast",
    description: "Windows 95 styled toast notifications using Sonner.",
    dependencies: ["sonner"],
  },
  toggle: {
    title: "Toggle",
    description: "Windows 95 styled toggle button component.",
    dependencies: ["@radix-ui/react-toggle"],
  },
  "toggle-group": {
    title: "Toggle Group",
    description: "Windows 95 styled toggle group component.",
    dependencies: ["@radix-ui/react-toggle-group"],
  },
  tooltip: {
    title: "Tooltip",
    description: "Windows 95 styled tooltip component.",
    dependencies: ["@radix-ui/react-tooltip"],
  },
  window: {
    title: "Window",
    description: "Windows 95 styled window container component.",
    dependencies: ["lucide-react"],
  },
}

interface ComponentDocPageProps {
  componentId: string
}

export function ComponentDocPage({ componentId }: ComponentDocPageProps) {
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const meta = componentMetadata[componentId]

  useEffect(() => {
    const loadMDX = async () => {
      try {
        setLoading(true)
        setError(null)
        const mdxModule = await import(
          `@/docs/components/${componentId}.mdx`
        )
        setMDXContent(() => mdxModule.default)
      } catch {
        setError(`Documentation for "${componentId}" not found`)
      } finally {
        setLoading(false)
      }
    }
    loadMDX()
  }, [componentId])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-win95-black text-sm">
          Loading documentation...
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl">
      {/* Header area -- always shown */}
      <div className="flex items-start justify-between mb-1">
        <div>
          <h1 className="text-2xl font-bold text-win95-black">
            {meta?.title ?? componentId}
          </h1>
          {meta?.description && (
            <p className="text-sm text-win95-dark-gray mt-1">
              {meta.description}
            </p>
          )}
        </div>
        <OpenInV0Button componentName={componentId} />
      </div>

      <div className="h-px bg-win95-dark-gray my-4" />

      {/* MDX content or fallback */}
      {error || !MDXContent ? (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-win95-black mb-3">
              Installation
            </h2>
            <InstallationTabs
              componentName={componentId}
              dependencies={meta?.dependencies ?? []}
            />
          </div>
          <div className="bg-win95-white win95-sunken p-4">
            <p className="text-win95-black text-sm mb-2">
              Full documentation for this component is being prepared.
            </p>
            <p className="text-win95-black text-xs">
              You can still install and use this component using the
              installation instructions above.
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-none text-win95-black">
          <MDXContent components={mdxComponents} />
        </div>
      )}
    </div>
  )
}
