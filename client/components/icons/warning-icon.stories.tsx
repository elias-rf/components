import type { Meta, StoryObj } from '@storybook/react'
import { WarningIcon } from './warning-icon'

const meta: Meta<typeof WarningIcon> = {
  component: WarningIcon,
}

export default meta
type Story = StoryObj<typeof WarningIcon>

export const Default: Story = {
  render: () => <WarningIcon />,
}
