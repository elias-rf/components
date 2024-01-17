import { Label } from '@/client/components/label/label.js'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './switch.js'

const meta: Meta<typeof Switch> = {
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: (props) => (
    <>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </>
  ),
}
