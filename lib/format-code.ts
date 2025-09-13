// Utility functions for formatting code in documentation

export function formatJSXCode(code: string): string {
  // Basic JSX formatting - removes extra whitespace and formats indentation
  return code
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n')
    .replace(/></g, '>\n<')
    .split('\n')
    .map((line, index, array) => {
      // Simple indentation logic
      const openTags = (line.match(/</g) || []).length
      const closeTags = (line.match(/>/g) || []).length
      const selfClosing = line.includes('/>')
      
      if (line.startsWith('</')) {
        return '  '.repeat(Math.max(0, index - 1)) + line
      } else if (openTags > 0 && !selfClosing) {
        return '  '.repeat(index) + line
      }
      return line
    })
    .join('\n')
}

export function createCodeExample(componentName: string, props?: Record<string, any>, children?: string): string {
  const propsString = props 
    ? Object.entries(props)
        .map(([key, value]) => {
          if (typeof value === 'string') {
            return `${key}="${value}"`
          } else if (typeof value === 'boolean') {
            return value ? key : ''
          } else {
            return `${key}={${JSON.stringify(value)}}`
          }
        })
        .filter(Boolean)
        .join(' ')
    : ''

  const propsWithSpace = propsString ? ` ${propsString}` : ''
  
  if (children) {
    return `<${componentName}${propsWithSpace}>\n  ${children}\n</${componentName}>`
  } else {
    return `<${componentName}${propsWithSpace} />`
  }
}

// Template for common component examples
export const codeTemplates = {
  button: (variant?: string, size?: string, children = 'Button') => 
    createCodeExample('Win95Button', { variant, size }, children),
  
  input: (placeholder?: string, disabled?: boolean) =>
    createCodeExample('Win95Input', { placeholder, disabled }),
    
  checkbox: (id?: string, disabled?: boolean, checked?: boolean) =>
    createCodeExample('Win95Checkbox', { id, disabled, defaultChecked: checked }),
    
  window: (title?: string, className?: string, children = 'Window content') =>
    createCodeExample('Win95Window', { title, className }, children)
}