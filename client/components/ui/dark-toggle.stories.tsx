import { DarkToggle } from '@/client/components/ui/dark-toggle.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export const Default: Story = () => {
  return (
    <>
      <DarkToggle />
    </>
  )
}

export default {
  title: 'Components / UI / DarkToggle',
}
