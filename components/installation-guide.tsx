"use client"

import { useState } from "react"
import { Win95Button } from "@/components/97cn/button"
import { Win95Window } from "@/components/97cn/window"
import { Win95GroupBox } from "@/components/97cn/group-box"
import { Win95Tabs, Win95TabsList, Win95TabsTrigger, Win95TabsContent } from "@/components/97cn/tabs"
import { CodeBlock } from "@/components/code-block"

interface InstallationGuideProps {
  onClose: () => void
  componentName?: string
}

export function InstallationGuide({ onClose, componentName = "button" }: InstallationGuideProps) {
  const [activeTab, setActiveTab] = useState("cli")

  return (
    <Win95Window title="Installation Guide" className="w-[700px] h-[600px]" onClose={onClose}>
      <div className="space-y-4 overflow-y-auto h-full">
        <Win95GroupBox label="Getting Started">
          <div className="space-y-2 text-xs text-win95-black">
            <p>Choose your preferred installation method for 97cn components:</p>
          </div>
        </Win95GroupBox>

        <Win95Tabs value={activeTab} onValueChange={setActiveTab}>
          <Win95TabsList>
            <Win95TabsTrigger value="cli">shadcn CLI</Win95TabsTrigger>
            <Win95TabsTrigger value="manual">Manual Copy</Win95TabsTrigger>
            <Win95TabsTrigger value="setup">Initial Setup</Win95TabsTrigger>
          </Win95TabsList>

          <Win95TabsContent value="cli">
            <div className="space-y-4">
              <Win95GroupBox label="Using shadcn CLI (Recommended)">
                <div className="space-y-2 text-xs text-win95-black mb-3">
                  <p>Install components directly using the shadcn CLI with our registry:</p>
                </div>
                <CodeBlock
                  code={`# Install a specific component
npx shadcn@latest add https://97cn.itzik.co/r/${componentName}

# Install multiple components
npx shadcn@latest add https://97cn.itzik.co/r/button https://97cn.itzik.co/r/input`}
                />
              </Win95GroupBox>

              <Win95GroupBox label="Usage Example">
                <CodeBlock
                  code={`import { Win95Button } from "@/components/97cn/button"

export function MyComponent() {
  return <Win95Button>Click me!</Win95Button>
}`}
                />
              </Win95GroupBox>
            </div>
          </Win95TabsContent>

          <Win95TabsContent value="manual">
            <div className="space-y-4">
              <Win95GroupBox label="Manual Installation">
                <div className="space-y-2 text-xs text-win95-black mb-3">
                  <p>Copy components manually to your project:</p>
                </div>
                <CodeBlock
                  code={`# 1. Install required dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge

# 2. Copy component files from the registry
# Visit https://97cn.itzik.co and copy the component code

# 3. Create the component file
mkdir -p components/97cn
# Paste the component code into components/97cn/${componentName}.tsx`}
                />
              </Win95GroupBox>

              <Win95GroupBox label="Component Dependencies">
                <div className="text-xs text-win95-black space-y-1">
                  <p>Each component may require specific dependencies:</p>
                  <p>• Button: @radix-ui/react-slot, class-variance-authority</p>
                  <p>• Checkbox: @radix-ui/react-checkbox</p>
                  <p>• Select: @radix-ui/react-select</p>
                  <p>• Dialog: @radix-ui/react-dialog</p>
                </div>
              </Win95GroupBox>
            </div>
          </Win95TabsContent>

          <Win95TabsContent value="setup">
            <div className="space-y-4">
              <Win95GroupBox label="Initial Project Setup">
                <div className="space-y-2 text-xs text-win95-black mb-3">
                  <p>Set up your project to work with 97cn components:</p>
                </div>
                <CodeBlock
                  code={`# 1. Install core dependencies
npm install tailwindcss @tailwindcss/postcss class-variance-authority clsx tailwind-merge

# 2. Configure components.json (for shadcn CLI)
npx shadcn@latest init

# 3. Add 97cn CSS variables to your globals.css`}
                />
              </Win95GroupBox>

              <Win95GroupBox label="CSS Variables">
                <div className="space-y-2 text-xs text-win95-black mb-3">
                  <p>Add these CSS variables to your globals.css:</p>
                </div>
                <CodeBlock
                  code={`:root {
  --win95-button-face: #c0c0c0;
  --win95-button-shadow: #808080;
  --win95-button-dark-shadow: #404040;
  --win95-button-light: #dfdfdf;
  --win95-button-highlight: #ffffff;
  --win95-text: #000000;
  --win95-window-frame: #008080;
  --win95-desktop: #008080;
}`}
                />
              </Win95GroupBox>
            </div>
          </Win95TabsContent>
        </Win95Tabs>

        <div className="flex justify-end">
          <Win95Button onClick={onClose}>Close</Win95Button>
        </div>
      </div>
    </Win95Window>
  )
}
