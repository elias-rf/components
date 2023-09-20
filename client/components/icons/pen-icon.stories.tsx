import type { Meta, StoryObj } from '@storybook/react'
import { PenIcon } from './pen-icon'

const meta: Meta<typeof PenIcon> = {
  component: PenIcon,
}

export default meta
type Story = StoryObj<typeof PenIcon>

export const Default: Story = {
  render: () => <PenIcon />,
}
