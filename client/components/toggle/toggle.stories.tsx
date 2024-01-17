import { FontBoldIcon } from '@radix-ui/react-icons'
import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './toggle.js'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: (props) => (
    <>
      <Toggle aria-label="Toggle italic">
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>
    </>
  ),
}
