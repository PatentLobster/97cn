import { ComponentPreview } from "./component-preview"
import { CodePreview, PreviewWithCode } from "./code-preview"
import { AutoPreview } from "./auto-preview"
import { PropsTable } from "./props-table"
import { InstallationTabs } from "@/components/installation-tabs"
import { CodeBlock } from "@/components/code-block"

// Import all 97cn components for use in MDX
import { Win95Button } from "@/components/97cn/button"
import { Win95Checkbox } from "@/components/97cn/checkbox"
import { Win95Input } from "@/components/97cn/input"
import { Win95Textarea } from "@/components/97cn/textarea"
import {
  Win95Select,
  Win95SelectContent,
  Win95SelectItem,
  Win95SelectTrigger,
  Win95SelectValue,
} from "@/components/97cn/select"
import { Win95RadioGroup, Win95RadioGroupItem } from "@/components/97cn/radio-group"
import { Win95Progress } from "@/components/97cn/progress"
import { Win95Slider } from "@/components/97cn/slider"
import { Win95Window } from "@/components/97cn/window"
import { Win95GroupBox } from "@/components/97cn/group-box"
import { Win95MenuBar, Win95MenuItem } from "@/components/97cn/menu-bar"
import { Win95StatusBar, Win95StatusPanel } from "@/components/97cn/status-bar"
import {
  Win95Command,
  Win95CommandEmpty,
  Win95CommandGroup,
  Win95CommandInput,
  Win95CommandItem,
  Win95CommandList,
} from "@/components/97cn/command"
import {
  Win95ContextMenu,
  Win95ContextMenuContent,
  Win95ContextMenuItem,
  Win95ContextMenuTrigger,
} from "@/components/97cn/context-menu"
import { Win95Tabs, Win95TabsList, Win95TabsTrigger, Win95TabsContent } from "@/components/97cn/tabs"
import { OTPInput } from "@/components/97cn/otp-input"
import { Switch } from "@/components/97cn/switch"
import { Toggle } from "@/components/97cn/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/97cn/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/97cn/tooltip"
import { Skeleton } from "@/components/97cn/skeleton"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/97cn/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/97cn/dialog"

export const mdxComponents = {
  // Documentation components
  ComponentPreview,
  CodePreview,
  PreviewWithCode,
  AutoPreview,
  PropsTable,
  InstallationTabs,
  CodeBlock,
  
  // HTML elements with Windows 95 styling
  h1: (props: any) => <h1 className="text-2xl font-bold text-win95-black mb-4 mt-6" {...props} />,
  h2: (props: any) => <h2 className="text-xl font-bold text-win95-black mb-3 mt-5" {...props} />,
  h3: (props: any) => <h3 className="text-lg font-semibold text-win95-black mb-2 mt-4" {...props} />,
  h4: (props: any) => <h4 className="text-base font-semibold text-win95-black mb-2 mt-3" {...props} />,
  p: (props: any) => <p className="text-sm text-win95-black mb-3 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-sm text-win95-black mb-3 space-y-1" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-sm text-win95-black mb-3 space-y-1" {...props} />,
  li: (props: any) => <li className="text-win95-black" {...props} />,
  code: (props: any) => <code className="bg-win95-light-gray px-1 py-0.5 text-xs text-win95-black font-mono border border-win95-dark-gray" {...props} />,
  pre: (props: any) => <pre className="bg-win95-light-gray win95-sunken p-3 mb-4 overflow-x-auto" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-win95-dark-gray pl-4 italic text-win95-black mb-4" {...props} />,
  table: (props: any) => (
    <div className="mb-4 win95-sunken bg-win95-white">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-win95-button-face" {...props} />,
  th: (props: any) => <th className="border border-win95-dark-gray px-3 py-2 text-left font-semibold text-win95-black win95-raised text-xs" {...props} />,
  td: (props: any) => <td className="border border-win95-dark-gray px-3 py-2 text-win95-black bg-win95-white text-xs" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} />,
  a: (props: any) => <a className="text-win95-blue underline hover:no-underline" {...props} />,
  strong: (props: any) => <strong className="font-bold text-win95-black" {...props} />,
  em: (props: any) => <em className="italic text-win95-black" {...props} />,
  
  // 97cn components
  Win95Button,
  Win95Checkbox,
  Win95Input,
  Win95Textarea,
  Win95Select,
  Win95SelectContent,
  Win95SelectItem,
  Win95SelectTrigger,
  Win95SelectValue,
  Win95RadioGroup,
  Win95RadioGroupItem,
  Win95Progress,
  Win95Slider,
  Win95Window,
  Win95GroupBox,
  Win95MenuBar,
  Win95MenuItem,
  Win95StatusBar,
  Win95StatusPanel,
  Win95Command,
  Win95CommandEmpty,
  Win95CommandGroup,
  Win95CommandInput,
  Win95CommandItem,
  Win95CommandList,
  Win95ContextMenu,
  Win95ContextMenuContent,
  Win95ContextMenuItem,
  Win95ContextMenuTrigger,
  Win95Tabs,
  Win95TabsList,
  Win95TabsTrigger,
  Win95TabsContent,
  OTPInput,
  Switch,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Skeleton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}