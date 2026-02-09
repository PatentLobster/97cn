import Link from "next/link"
import { OpenInV0Button } from "@/components/docs/open-in-v0-button"

export default function DocsPage() {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-win95-black">Introduction</h1>
      </div>
      <p className="text-sm text-win95-black mb-4 leading-relaxed">
        Windows 95 inspired component library built on top of{" "}
        <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-win95-blue underline hover:no-underline">
          shadcn/ui
        </a>{" "}
        and{" "}
        <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer" className="text-win95-blue underline hover:no-underline">
          Radix UI
        </a>
        . Authentic retro aesthetics with modern accessibility and composability.
      </p>

      <div className="bg-win95-white win95-sunken p-4 mb-6">
        <p className="text-sm text-win95-black leading-relaxed">
          97cn is not a component library in the traditional sense. It is a collection of
          re-usable components that you can copy and paste into your apps. You own the code.
          Pick the components you need. Use the CLI to add components to your project.
        </p>
      </div>

      <h2 className="text-xl font-bold text-win95-black mb-3 mt-6">FAQ</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-bold text-win95-black mb-1">
            Why copy/paste and not packaged as a dependency?
          </h3>
          <p className="text-xs text-win95-black leading-relaxed">
            The idea behind this is to give you ownership and control over the code, allowing you to
            decide how the components are built and styled. Start with some sensible Windows 95
            defaults, then customize the components to your needs.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-win95-black mb-1">
            Do the components work with other frameworks?
          </h3>
          <p className="text-xs text-win95-black leading-relaxed">
            The components are built for Next.js and React. They rely on Radix UI primitives and
            Tailwind CSS. If your framework supports these, you should be able to use the components.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-win95-black mb-1">
            Can I use this in my project?
          </h3>
          <p className="text-xs text-win95-black leading-relaxed">
            Yes. Free to use for personal and commercial projects. No attribution required.
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        <Link
          href="/docs/installation"
          className="inline-flex items-center px-4 py-1.5 text-xs font-sans bg-win95-button-face win95-raised text-win95-black hover:bg-win95-light-gray active:win95-sunken"
        >
          Get Started
        </Link>
        <Link
          href="/docs/components/button"
          className="inline-flex items-center px-4 py-1.5 text-xs font-sans bg-win95-button-face win95-raised text-win95-black hover:bg-win95-light-gray active:win95-sunken"
        >
          Browse Components
        </Link>
      </div>
    </div>
  )
}
