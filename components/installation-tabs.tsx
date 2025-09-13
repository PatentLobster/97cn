"use client"

import { useState } from "react"
import { Win95Tabs, Win95TabsList, Win95TabsTrigger, Win95TabsContent } from "@/components/97cn/tabs"
import { Win95Button } from "@/components/97cn/button"
import { CodeBlock } from "@/components/code-block"
import { Copy, Check } from "lucide-react"

interface InstallationTabsProps {
  componentName: string
  dependencies?: string[]
  registryUrl?: string
}

export function InstallationTabs({ 
  componentName, 
  dependencies = [], 
  registryUrl = "https://97cn.itzik.co" 
}: InstallationTabsProps) {
  const [activeTab, setActiveTab] = useState("cli")
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates(prev => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }))
      }, 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const cliCommand = `npx shadcn@latest add ${registryUrl}/r/${componentName}`
  const npmInstall = dependencies.length > 0 ? `npm install ${dependencies.join(" ")}` : "# No additional dependencies required"
  
  const componentClassName = componentName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")

  const usageExample = `import { Win95${componentClassName} } from "@/components/97cn/${componentName}"

export function Example() {
  return (
    <Win95${componentClassName}>
      ${componentName === "button" ? "Click me!" : "Content"}
    </Win95${componentClassName}>
  )
}`

  return (
    <Win95Tabs value={activeTab} onValueChange={setActiveTab}>
      <Win95TabsList>
        <Win95TabsTrigger value="cli">CLI</Win95TabsTrigger>
        <Win95TabsTrigger value="manual">Manual</Win95TabsTrigger>
        <Win95TabsTrigger value="usage">Usage</Win95TabsTrigger>
      </Win95TabsList>

      <Win95TabsContent value="cli">
        <div className="space-y-3">
          <div className="text-xs text-win95-black">
            Install using the shadcn CLI:
          </div>
          <div className="relative">
            <CodeBlock code={cliCommand} />
          </div>
        </div>
      </Win95TabsContent>

      <Win95TabsContent value="manual">
        <div className="space-y-3">
          <div className="text-xs text-win95-black">
            Manual installation steps:
          </div>
          
          <div className="space-y-2">
            <div className="text-xs font-bold text-win95-black">1. Install dependencies:</div>
            <div className="relative">
              <CodeBlock code={npmInstall} />
              {dependencies.length > 0 && (
                <Win95Button
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(npmInstall, "deps")}
                >
                  {copiedStates.deps ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </Win95Button>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-win95-black">2. Copy component:</div>
            <div className="text-xs text-win95-black">
              Copy the component code from the registry and save it as:
              <code className="bg-win95-light-gray px-1 ml-1">components/97cn/{componentName}.tsx</code>
            </div>
          </div>
        </div>
      </Win95TabsContent>

      <Win95TabsContent value="usage">
        <div className="space-y-3">
          <div className="text-xs text-win95-black">
            Import and use the component:
          </div>
          <div className="relative">
            <CodeBlock code={usageExample} />
            <Win95Button
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard(usageExample, "usage")}
            >
              {copiedStates.usage ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </Win95Button>
          </div>
        </div>
      </Win95TabsContent>
    </Win95Tabs>
  )
}