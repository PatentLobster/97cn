"use client"

import { useState } from "react"
import { Win95Button } from "@/components/97cn/button"
import { Win95GroupBox } from "@/components/97cn/group-box"
import { Check, Copy } from "lucide-react"
interface CodeBlockProps {
  code: string
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <Win95GroupBox >
      <div className="relative">
        <pre className="bg-win95-white win95-sunken p-2 text-xs font-mono text-win95-black overflow-x-auto whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
        <div className="mt-2 flex justify-end">
          
          <Win95Button size="sm" onClick={copyToClipboard}>
             {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          </Win95Button>
        </div>
      </div>
    </Win95GroupBox>
  )
}
