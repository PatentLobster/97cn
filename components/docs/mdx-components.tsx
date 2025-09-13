import { ComponentPreview } from "./component-preview"
import { CodePreview, PreviewWithCode } from "./code-preview"
import { AutoPreview } from "./auto-preview"
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
  InstallationTabs,
  CodeBlock,
  
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