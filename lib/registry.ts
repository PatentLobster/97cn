import fs from "fs"
import path from "path"

export interface RegistryItem {
  name: string
  type: "registry:ui" | "registry:lib" | "registry:example"
  description?: string
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  files: RegistryFile[]
  tailwind?: {
    config?: Record<string, any>
    css?: string[]
  }
  cssVars?: Record<string, Record<string, string>>
  docs?: string
}

export interface RegistryFile {
  name: string
  content: string
  type?: "registry:ui" | "registry:lib"
  target?: string
}

export interface ComponentMetadata {
  name: string
  description: string
  category: string
  dependencies: string[]
  tags: string[]
}

export async function getRegistryIndex(): Promise<ComponentMetadata[]> {
  try {
    const registryPath = path.join(process.cwd(), "registry/index.json")
    const registryData = JSON.parse(fs.readFileSync(registryPath, "utf-8"))
    
    return Object.values(registryData.components) as ComponentMetadata[]
  } catch (error) {
    console.error("Failed to load registry index:", error)
    return []
  }
}

export async function getComponent(name: string): Promise<RegistryItem | null> {
  try {
    const componentPath = path.join(process.cwd(), "components/97cn", `${name}.tsx`)
    
    if (!fs.existsSync(componentPath)) {
      return null
    }

    const content = fs.readFileSync(componentPath, "utf-8")
    
    // Load metadata from registry
    const registryPath = path.join(process.cwd(), "registry/index.json")
    const registryData = JSON.parse(fs.readFileSync(registryPath, "utf-8"))
    const metadata = registryData.components[name]

    if (!metadata) {
      return null
    }

    return {
      name,
      type: "registry:ui",
      description: metadata.description,
      dependencies: metadata.dependencies || [],
      files: [
        {
          name: `${name}.tsx`,
          content,
          type: "registry:ui"
        }
      ],
      tailwind: {
        config: {},
        css: []
      },
      cssVars: {
        light: {},
        dark: {}
      }
    }
  } catch (error) {
    console.error(`Failed to load component ${name}:`, error)
    return null
  }
}

export function extractDependencies(content: string): string[] {
  const dependencies: string[] = []
  const importRegex = /import.*from\s+["']([^"']+)["']/g
  let match

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1]
    
    // Only include external dependencies (not relative imports)
    if (!importPath.startsWith(".") && !importPath.startsWith("@/")) {
      dependencies.push(importPath)
    }
  }

  return [...new Set(dependencies)]
}

export function generateInstallCommand(componentName: string, baseUrl?: string): string {
  const registryUrl = baseUrl || "https://97cn.itzik.co"
  return `npx shadcn@latest add ${registryUrl}/r/${componentName}`
}

export function generateManualInstallSteps(component: RegistryItem): string[] {
  const steps = [
    "Install required dependencies:",
    `npm install ${component.dependencies?.join(" ") || "# No additional dependencies required"}`,
    "",
    "Copy the component file:",
    `Create components/97cn/${component.name}.tsx and copy the component code`,
    "",
    "Import and use:",
    `import { ${component.name.split("-").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join("")} } from "@/components/97cn/${component.name}"`
  ]
  
  return steps
}
ex
port function getComponentMetadata(name: string): ComponentMetadata | null {
  try {
    const registryPath = path.join(process.cwd(), "registry/index.json")
    const registryData = JSON.parse(fs.readFileSync(registryPath, "utf-8"))
    return registryData.components[name] || null
  } catch (error) {
    console.error(`Failed to load component metadata for ${name}:`, error)
    return null
  }
}

export function getAllComponentNames(): string[] {
  try {
    const registryPath = path.join(process.cwd(), "registry/index.json")
    const registryData = JSON.parse(fs.readFileSync(registryPath, "utf-8"))
    return Object.keys(registryData.components)
  } catch (error) {
    console.error("Failed to load component names:", error)
    return []
  }
}