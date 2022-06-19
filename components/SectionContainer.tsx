import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div
      style={{ border: 'solid 1px transparent' }}
      className="mx-auto h-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0"
    >
      {children}
    </div>
  )
}
