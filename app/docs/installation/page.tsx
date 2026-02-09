import { CodeBlock } from "@/components/code-block"

export default function InstallationPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-win95-black mb-4">Installation</h1>
      <p className="text-sm text-win95-black mb-6 leading-relaxed">
        How to install components and dependencies for 97cn.
      </p>

      <h2 className="text-xl font-bold text-win95-black mb-3">Prerequisites</h2>
      <p className="text-sm text-win95-black mb-4 leading-relaxed">
        97cn components are designed to work with an existing Next.js project that has Tailwind CSS
        configured. You also need the shadcn CLI.
      </p>

      <h2 className="text-xl font-bold text-win95-black mb-3 mt-6">Using the CLI</h2>
      <p className="text-sm text-win95-black mb-3 leading-relaxed">
        The simplest way to add components is via the shadcn CLI. Run the following command to
        install a component:
      </p>
      <div className="mb-6">
        <CodeBlock code={`npx shadcn@latest add https://97cn.itzik.co/r/button`} />
      </div>

      <p className="text-sm text-win95-black mb-3 leading-relaxed">
        This will add the component to your project along with any required dependencies and CSS variables.
      </p>

      <h2 className="text-xl font-bold text-win95-black mb-3 mt-6">Manual Installation</h2>
      <p className="text-sm text-win95-black mb-3 leading-relaxed">
        If you prefer manual installation, follow these steps:
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-sm font-bold text-win95-black mb-2">
            1. Add the CSS variables
          </h3>
          <p className="text-xs text-win95-black mb-2 leading-relaxed">
            Add the following CSS variables to your globals.css file:
          </p>
          <CodeBlock code={`:root {
  --win95-gray: #c0c0c0;
  --win95-dark-gray: #808080;
  --win95-light-gray: #dfdfdf;
  --win95-white: #ffffff;
  --win95-black: #000000;
  --win95-blue: #0000ff;
  --win95-navy: #000080;
  --win95-teal: #008080;
  --win95-highlight: #0000ff;
  --win95-highlight-text: #ffffff;
  --win95-button-face: #c0c0c0;
  --win95-button-shadow: #808080;
  --win95-button-highlight: #ffffff;
  --win95-button-dark-shadow: #404040;
  --win95-active-title: #000080;
  --win95-active-title-text: #ffffff;
}`} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-win95-black mb-2">
            2. Add the utility classes
          </h3>
          <p className="text-xs text-win95-black mb-2 leading-relaxed">
            Add the Windows 95 border utility classes:
          </p>
          <CodeBlock code={`@layer utilities {
  .win95-raised {
    border-top: 2px solid var(--win95-button-highlight);
    border-left: 2px solid var(--win95-button-highlight);
    border-right: 2px solid var(--win95-button-shadow);
    border-bottom: 2px solid var(--win95-button-shadow);
  }

  .win95-sunken {
    border-top: 2px solid var(--win95-button-shadow);
    border-left: 2px solid var(--win95-button-shadow);
    border-right: 2px solid var(--win95-button-highlight);
    border-bottom: 2px solid var(--win95-button-highlight);
  }
}`} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-win95-black mb-2">
            3. Add Tailwind theme config
          </h3>
          <p className="text-xs text-win95-black mb-2 leading-relaxed">
            Map the CSS variables to Tailwind color utilities:
          </p>
          <CodeBlock code={`@theme inline {
  --color-win95-gray: var(--win95-gray);
  --color-win95-dark-gray: var(--win95-dark-gray);
  --color-win95-light-gray: var(--win95-light-gray);
  --color-win95-white: var(--win95-white);
  --color-win95-black: var(--win95-black);
  --color-win95-blue: var(--win95-blue);
  --color-win95-navy: var(--win95-navy);
  --color-win95-teal: var(--win95-teal);
  --color-win95-highlight: var(--win95-highlight);
  --color-win95-highlight-text: var(--win95-highlight-text);
  --color-win95-button-face: var(--win95-button-face);
  --color-win95-button-shadow: var(--win95-button-shadow);
  --color-win95-button-highlight: var(--win95-button-highlight);
  --color-win95-active-title: var(--win95-active-title);
  --color-win95-active-title-text: var(--win95-active-title-text);
}`} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-win95-black mb-2">
            4. Copy component files
          </h3>
          <p className="text-xs text-win95-black leading-relaxed">
            Copy the component source files into your project under{" "}
            <code className="bg-win95-light-gray px-1 py-0.5 text-xs text-win95-black font-mono border border-win95-dark-gray">
              components/97cn/
            </code>
            . Each component page provides the exact source code.
          </p>
        </div>
      </div>
    </div>
  )
}
