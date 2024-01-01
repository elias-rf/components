import { DarkToggle } from '@/client/components/ui-old/dark-toggle.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DarkToggle> = {
  component: DarkToggle,
}

export default meta
type Story = StoryObj<typeof DarkToggle>

export const Default: Story = {
  render: () => {
    return (
      <>
        <DarkToggle />
      </>
    )
  },
}
