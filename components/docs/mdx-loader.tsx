"use client"

import { useState, useEffect } from "react"
import { mdxComponents } from "./mdx-components"
import { InstallationTabs } from "@/components/installation-tabs"

// Component metadata mapping
const componentMetadata: Record<string, { dependencies: string[] }> = {
  "button": { dependencies: ["@radix-ui/react-slot", "class-variance-authority"] },
  "checkbox": { dependencies: ["@radix-ui/react-checkbox"] },
  "input": { dependencies: [] },
  "textarea": { dependencies: [] },
  "select": { dependencies: ["@radix-ui/react-select"] },
  "radio-group": { dependencies: ["@radix-ui/react-radio-group"] },
  "progress": { dependencies: ["@radix-ui/react-progress"] },
  "slider": { dependencies: ["@radix-ui/react-slider"] },
  "switch": { dependencies: ["@radix-ui/react-switch"] },
  "tabs": { dependencies: ["@radix-ui/react-tabs"] },
  "toggle": { dependencies: ["@radix-ui/react-toggle"] },
  "toggle-group": { dependencies: ["@radix-ui/react-toggle-group"] },
  "command": { dependencies: ["cmdk"] },
  "otp-input": { dependencies: ["input-otp"] },
  "window": { dependencies: ["lucide-react"] },
  "group-box": { dependencies: [] },
  "menu-bar": { dependencies: ["@radix-ui/react-menubar"] },
  "status-bar": { dependencies: [] },
  "context-menu": { dependencies: ["@radix-ui/react-context-menu"] },
  "toast": { dependencies: ["@radix-ui/react-toast"] },
  "tooltip": { dependencies: ["@radix-ui/react-tooltip"] },
  "skeleton": { dependencies: [] },
  "popover": { dependencies: ["@radix-ui/react-popover"] },
  "dialog": { dependencies: ["@radix-ui/react-dialog"] }
}

const getComponentDependencies = (componentName: string) => {
  return componentMetadata[componentName]?.dependencies || []
}

interface MDXLoaderProps {
  componentId: string
}

export function MDXLoader({ componentId }: MDXLoaderProps) {
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadMDX = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Dynamic import of MDX file
        const mdxModule = await import(`@/docs/components/${componentId}.mdx`)
        setMDXContent(() => mdxModule.default)
      } catch (err) {
        console.error(`Failed to load MDX for ${componentId}:`, err)
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
        <div className="text-win95-black text-sm">Loading documentation...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-win95-black mb-4">
          {componentId.charAt(0).toUpperCase() + componentId.slice(1).replace('-', ' ')} Component
        </h2>
        
        <div className="bg-win95-light-gray win95-sunken p-3 mb-4">
          <h3 className="text-sm font-semibold mb-3 text-win95-black">Installation</h3>
          <InstallationTabs 
            componentName={componentId} 
            dependencies={getComponentDependencies(componentId)}
          />
        </div>

        <div className="bg-win95-light-gray win95-sunken p-4">
          <p className="text-win95-black text-sm mb-2">
            Documentation for this component is being prepared.
          </p>
          <p className="text-win95-black text-xs">
            You can still install and use this component using the installation instructions above.
          </p>
        </div>
      </div>
    )
  }

  if (!MDXContent) {
    return null
  }

  return (
    <div className="prose prose-sm max-w-none">
      <MDXContent components={mdxComponents} />
    </div>
  )
}