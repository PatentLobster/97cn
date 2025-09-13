"use client"

import { Win95GroupBox } from "@/components/97cn/group-box"
import { Win95Tabs, Win95TabsList, Win95TabsTrigger, Win95TabsContent } from "@/components/97cn/tabs"
import { CodeBlock } from "@/components/code-block"


interface ComponentPreviewProps {
  children: React.ReactNode
  title?: string
  code?: string
}

export function ComponentPreview({ children, title, code }: ComponentPreviewProps) {

  // Extract code from children if not provided explicitly
  const extractedCode = code || extractCodeFromChildren(children)

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
            <CodeBlock code={extractedCode} />
          </div>
        </Win95TabsContent>
      </Win95Tabs>
    </Win95GroupBox>
  )
}

// Helper function to extract JSX code from React children
function extractCodeFromChildren(children: React.ReactNode): string {
  // This is a simplified version - in a real implementation you might want
  // to use a more sophisticated approach to extract the actual JSX
  if (typeof children === 'string') {
    return children
  }
  
  // For now, return a placeholder - this would need to be enhanced
  // to actually extract the JSX representation of the children
  return `// Code preview not available
// Please provide the code prop to ComponentPreview`
}