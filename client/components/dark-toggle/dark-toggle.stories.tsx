import { DarkToggle } from '@/client/components/dark-toggle/dark-toggle.js'
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
