"use client"

import { useState, Children, isValidElement, cloneElement } from "react"
import { Win95GroupBox } from "@/components/97cn/group-box"
import { Win95Tabs, Win95TabsList, Win95TabsTrigger, Win95TabsContent } from "@/components/97cn/tabs"
import { Win95Button } from "@/components/97cn/button"
import { CodeBlock } from "@/components/code-block"
import { Copy, Check } from "lucide-react"

interface AutoPreviewProps {
  children: React.ReactNode
  title?: string
}

export function AutoPreview({ children, title }: AutoPreviewProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  // Generate code from React children
  const generatedCode = generateCodeFromChildren(children)

  return (
    <Win95GroupBox label={title || "Preview"}>
      <Win95Tabs defaultValue="preview" className="w-full">
        <Win95TabsList>
          <Win95TabsTrigger value="preview">Preview</Win95TabsTrigger>
          <Win95TabsTrigger value="code">Code</Win95TabsTrigger>
        </Win95TabsList>
        
        <Win95TabsContent value="preview" className="p-4 bg-win95-button-face min-h-[100px] flex items-center justify-center">
          {children}
        </Win95TabsContent>
        
        <Win95TabsContent value="code" className="p-0">
          <div className="relative">
            <CodeBlock code={generatedCode} />
          </div>
        </Win95TabsContent>
      </Win95Tabs>
    </Win95GroupBox>
  )
}

// Function to generate JSX code string from React children
function generateCodeFromChildren(children: React.ReactNode, indent = 0): string {
  const indentStr = "  ".repeat(indent)
  
  if (typeof children === 'string') {
    return children
  }
  
  if (typeof children === 'number') {
    return children.toString()
  }
  
  if (!children) {
    return ""
  }
  
  if (Array.isArray(children)) {
    return children.map(child => generateCodeFromChildren(child, indent)).join('\n')
  }
  
  if (isValidElement(children)) {
    const element = children as React.ReactElement
    const componentName = getComponentName(element.type)
    const props = element.props
    const hasChildren = props.children !== undefined
    
    // Generate props string
    const propsString = generatePropsString(props, hasChildren)
    const propsWithSpace = propsString ? ` ${propsString}` : ''
    
    if (!hasChildren) {
      return `${indentStr}<${componentName}${propsWithSpace} />`
    }
    
    const childrenCode = generateCodeFromChildren(props.children, indent + 1)
    const childrenLines = childrenCode.split('\n').filter(line => line.trim())
    
    if (childrenLines.length === 1 && !childrenLines[0].includes('<')) {
      // Single line text content
      return `${indentStr}<${componentName}${propsWithSpace}>${childrenCode.trim()}</${componentName}>`
    } else {
      // Multi-line or complex children
      const formattedChildren = childrenLines
        .map(line => line.startsWith('  ') ? line : `  ${line}`)
        .join('\n')
      return `${indentStr}<${componentName}${propsWithSpace}>\n${formattedChildren}\n${indentStr}</${componentName}>`
    }
  }
  
  return ""
}

// Get component name from React component type
function getComponentName(type: any): string {
  if (typeof type === 'string') {
    return type
  }
  
  if (typeof type === 'function') {
    return type.displayName || type.name || 'Component'
  }
  
  return 'Component'
}

// Generate props string from props object
function generatePropsString(props: any, hasChildren: boolean): string {
  const propsToInclude = { ...props }
  
  // Remove children from props as it's handled separately
  if (hasChildren) {
    delete propsToInclude.children
  }
  
  // Remove React-specific props
  delete propsToInclude.key
  delete propsToInclude.ref
  
  return Object.entries(propsToInclude)
    .map(([key, value]) => {
      if (key === 'className' && typeof value === 'string') {
        return `className="${value}"`
      }
      
      if (typeof value === 'string') {
        return `${key}="${value}"`
      }
      
      if (typeof value === 'boolean') {
        return value ? key : ''
      }
      
      if (typeof value === 'number') {
        return `${key}={${value}}`
      }
      
      if (typeof value === 'function') {
        // For functions, show a placeholder
        return `${key}={${getFunctionPlaceholder(key)}}`
      }
      
      if (Array.isArray(value)) {
        return `${key}={${JSON.stringify(value)}}`
      }
      
      if (typeof value === 'object' && value !== null) {
        return `${key}={${JSON.stringify(value)}}`
      }
      
      return `${key}={${JSON.stringify(value)}}`
    })
    .filter(Boolean)
    .join(' ')
}

// Generate placeholder for function props
function getFunctionPlaceholder(propName: string): string {
  const commonHandlers: Record<string, string> = {
    onClick: '() => {}',
    onChange: '(value) => {}',
    onSubmit: '(e) => {}',
    onClose: '() => {}',
    onOpen: '() => {}',
    onSelect: '(value) => {}',
    onValueChange: '(value) => {}',
    onCheckedChange: '(checked) => {}',
  }
  
  return commonHandlers[propName] || '() => {}'
}