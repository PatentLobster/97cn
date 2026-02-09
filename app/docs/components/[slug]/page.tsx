import { notFound } from "next/navigation"
import { ComponentDocPage } from "@/components/docs/component-doc-page"

const VALID_COMPONENTS = [
  "button",
  "checkbox",
  "command",
  "context-menu",
  "dialog",
  "group-box",
  "input",
  "menu-bar",
  "otp-input",
  "popover",
  "progress",
  "radio-group",
  "select",
  "skeleton",
  "slider",
  "status-bar",
  "switch",
  "tabs",
  "textarea",
  "toast",
  "toggle",
  "toggle-group",
  "tooltip",
  "window",
]

export function generateStaticParams() {
  return VALID_COMPONENTS.map((slug) => ({ slug }))
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!VALID_COMPONENTS.includes(slug)) {
    notFound()
  }

  return <ComponentDocPage componentId={slug} />
}
