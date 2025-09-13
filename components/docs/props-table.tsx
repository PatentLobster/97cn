"use client"

import { Win95GroupBox } from "@/components/97cn/group-box"

interface PropDefinition {
  name: string
  type: string
  defaultValue?: string
  description: string
  required?: boolean
}

interface PropsTableProps {
  props: PropDefinition[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <Win95GroupBox label="Props">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr className="bg-win95-button-face">
              <th className="border border-win95-dark-gray px-3 py-2 text-left font-semibold text-win95-black win95-raised">
                Prop
              </th>
              <th className="border border-win95-dark-gray px-3 py-2 text-left font-semibold text-win95-black win95-raised">
                Type
              </th>
              <th className="border border-win95-dark-gray px-3 py-2 text-left font-semibold text-win95-black win95-raised">
                Default
              </th>
              <th className="border border-win95-dark-gray px-3 py-2 text-left font-semibold text-win95-black win95-raised">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <tr key={prop.name}>
                <td className="border border-win95-dark-gray px-3 py-2 text-win95-black bg-win95-white">
                  <code className="bg-win95-light-gray px-1 py-0.5 text-win95-black font-mono border border-win95-dark-gray">
                    {prop.name}
                    {prop.required && <span className="text-red-600 ml-1">*</span>}
                  </code>
                </td>
                <td className="border border-win95-dark-gray px-3 py-2 text-win95-black bg-win95-white">
                  <code className="bg-win95-light-gray px-1 py-0.5 text-win95-black font-mono border border-win95-dark-gray">
                    {prop.type}
                  </code>
                </td>
                <td className="border border-win95-dark-gray px-3 py-2 text-win95-black bg-win95-white">
                  {prop.defaultValue ? (
                    <code className="bg-win95-light-gray px-1 py-0.5 text-win95-black font-mono border border-win95-dark-gray">
                      {prop.defaultValue}
                    </code>
                  ) : (
                    <span className="text-win95-dark-gray">-</span>
                  )}
                </td>
                <td className="border border-win95-dark-gray px-3 py-2 text-win95-black bg-win95-white">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Win95GroupBox>
  )
}