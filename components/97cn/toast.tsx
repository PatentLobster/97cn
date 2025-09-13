"use client"

import type * as React from "react"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-win95-button-face group-[.toaster]:text-win95-black group-[.toaster]:border-2 group-[.toaster]:border-win95-button-shadow group-[.toaster]:shadow-lg win95-raised group-[.toaster]:font-sans group-[.toaster]:text-xs group-[.toaster]:rounded-none",
          description: "group-[.toast]:text-win95-dark-gray group-[.toast]:text-xs",
          actionButton:
            "group-[.toast]:bg-win95-button-face group-[.toast]:text-win95-black win95-raised group-[.toast]:border-2 group-[.toast]:border-win95-button-shadow group-[.toast]:text-xs group-[.toast]:px-2 group-[.toast]:py-1 group-[.toast]:font-sans group-[.toast]:rounded-none hover:group-[.toast]:bg-win95-light-gray active:group-[.toast]:win95-sunken",
          cancelButton:
            "group-[.toast]:bg-win95-button-face group-[.toast]:text-win95-black win95-raised group-[.toast]:border-2 group-[.toast]:border-win95-button-shadow group-[.toast]:text-xs group-[.toast]:px-2 group-[.toast]:py-1 group-[.toast]:font-sans group-[.toast]:rounded-none hover:group-[.toast]:bg-win95-light-gray active:group-[.toast]:win95-sunken",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
