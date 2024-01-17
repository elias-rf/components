import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label.js'

const meta: Meta<typeof Label> = {
  component: Label,
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: (props) => (
    <>
      <div className="flex items-center space-x-2">
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </>
  ),
}
