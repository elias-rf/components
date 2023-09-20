import type { Meta, StoryObj } from '@storybook/react'
import { FireIcon } from './fire-icon'

const meta: Meta<typeof FireIcon> = {
  component: FireIcon,
}

export default meta
type Story = StoryObj<typeof FireIcon>

export const Default: Story = {
  render: () => <FireIcon />,
}
