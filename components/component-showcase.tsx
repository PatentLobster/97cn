"use client";

import { MDXLoader } from "@/components/docs/mdx-loader";

interface ComponentShowcaseProps {
  componentId: string;
}

export function ComponentShowcase({ componentId }: ComponentShowcaseProps) {
  return <MDXLoader componentId={componentId} />;
}
