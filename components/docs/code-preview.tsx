"use client"

import { Win95GroupBox } from "@/components/97cn/group-box"
import { Win95Tabs, Win95TabsList, Win95TabsTrigger, Win95TabsContent } from "@/components/97cn/tabs"
import { CodeBlock } from "@/components/code-block"


interface CodePreviewProps {
  children: React.ReactNode
  title?: string
  code: string
  language?: string
}

export function CodePreview({ children, title, code, language = "tsx" }: CodePreviewProps) {


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
            <CodeBlock code={code} />
            
          </div>
        </Win95TabsContent>
      </Win95Tabs>
    </Win95GroupBox>
  )
}

// Alternative component that accepts both preview and code as separate props
interface PreviewWithCodeProps {
  preview: React.ReactNode
  code: string
  title?: string
  language?: string
}

export function PreviewWithCode({ preview, code, title, language = "tsx" }: PreviewWithCodeProps) {
  return <CodePreview title={title} code={code} language={language}>{preview}</CodePreview>
}