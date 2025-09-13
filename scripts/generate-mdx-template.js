// Template generator for component MDX files
const components = [
  { name: "radio-group", title: "Radio Group", description: "Windows 95 styled radio group component", category: "Controls", dependencies: ["@radix-ui/react-radio-group"] },
  { name: "progress", title: "Progress", description: "Windows 95 styled progress bar component", category: "Controls", dependencies: ["@radix-ui/react-progress"] },
  { name: "slider", title: "Slider", description: "Windows 95 styled slider component", category: "Controls", dependencies: ["@radix-ui/react-slider"] },
  { name: "switch", title: "Switch", description: "Windows 95 styled switch component", category: "Controls", dependencies: ["@radix-ui/react-switch"] },
  { name: "toggle", title: "Toggle", description: "Windows 95 styled toggle button component", category: "Controls", dependencies: ["@radix-ui/react-toggle"] },
  { name: "toggle-group", title: "Toggle Group", description: "Windows 95 styled toggle group component", category: "Controls", dependencies: ["@radix-ui/react-toggle-group"] },
  { name: "command", title: "Command", description: "Windows 95 styled command palette component", category: "Controls", dependencies: ["cmdk"] },
  { name: "otp-input", title: "OTP Input", description: "Windows 95 styled OTP input component", category: "Controls", dependencies: ["input-otp"] },
  { name: "group-box", title: "Group Box", description: "Windows 95 styled group box component", category: "Layout", dependencies: [] },
  { name: "menu-bar", title: "Menu Bar", description: "Windows 95 styled menu bar component", category: "Navigation", dependencies: ["@radix-ui/react-menubar"] },
  { name: "status-bar", title: "Status Bar", description: "Windows 95 styled status bar component", category: "Navigation", dependencies: [] },
  { name: "context-menu", title: "Context Menu", description: "Windows 95 styled context menu component", category: "Navigation", dependencies: ["@radix-ui/react-context-menu"] },
  { name: "toast", title: "Toast", description: "Windows 95 styled toast notification component", category: "Feedback", dependencies: ["@radix-ui/react-toast"] },
  { name: "tooltip", title: "Tooltip", description: "Windows 95 styled tooltip component", category: "Feedback", dependencies: ["@radix-ui/react-tooltip"] },
  { name: "skeleton", title: "Skeleton", description: "Windows 95 styled skeleton loading component", category: "Feedback", dependencies: [] },
  { name: "popover", title: "Popover", description: "Windows 95 styled popover component", category: "Overlay", dependencies: ["@radix-ui/react-popover"] },
  { name: "dialog", title: "Dialog", description: "Windows 95 styled dialog component", category: "Overlay", dependencies: ["@radix-ui/react-dialog"] }
]

function generateMDXTemplate(component) {
  const depsArray = component.dependencies.length > 0 
    ? `["${component.dependencies.join('", "')}"]`
    : "[]"

  return `---
title: "${component.title}"
description: "${component.description}"
category: "${component.category}"
dependencies: ${depsArray}
---

import { AutoPreview } from "@/components/docs/auto-preview"
import { InstallationTabs } from "@/components/installation-tabs"
// TODO: Import the actual component here

# ${component.title}

${component.description}

## Installation

<InstallationTabs 
  componentName="${component.name}" 
  dependencies={${depsArray}}
/>

## Usage

<AutoPreview>
  {/* TODO: Add component usage example - just write JSX once! */}
</AutoPreview>

\`\`\`tsx
// TODO: Add import example
\`\`\`

## Examples

<AutoPreview>
  {/* TODO: Add more examples - code tab will auto-generate! */}
</AutoPreview>

## Props

{/* TODO: Add props table */}
`
}

// Generate templates for each component
components.forEach(component => {
  console.log(`=== ${component.name}.mdx ===`)
  console.log(generateMDXTemplate(component))
  console.log('\n')
})