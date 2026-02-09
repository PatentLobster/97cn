interface OpenInV0ButtonProps {
  componentName: string
}

export function OpenInV0Button({ componentName }: OpenInV0ButtonProps) {
  const url = `https://v0.dev/chat/api/open?url=https://97cn.itzik.co/r/${componentName}.json`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-sans bg-win95-black text-win95-white hover:bg-win95-dark-gray active:win95-sunken border border-win95-button-shadow"
    >
      <svg
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-6"
        aria-hidden="true"
      >
        <path d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9935 6.80981 35.9794 6.71981L26.4628 16.0805H23.3919V0Z" fill="currentColor" />
        <path d="M23.0007 16.0805V0H19.0877V16.0805H23.0007Z" fill="currentColor" />
        <path d="M0 0H3.91294L16.3749 16.0805H12.4619L0 0Z" fill="currentColor" />
        <path d="M0 16.0805V0H3.91294V16.0805H0Z" fill="currentColor" />
      </svg>
      Open in v0
    </a>
  )
}
