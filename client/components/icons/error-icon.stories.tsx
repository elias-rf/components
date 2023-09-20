import type { Meta, StoryObj } from '@storybook/react'
import { ErrorIcon } from './error-icon'

const meta: Meta<typeof ErrorIcon> = {
  component: ErrorIcon,
}

export default meta
type Story = StoryObj<typeof ErrorIcon>

export const Default: Story = {
  render: () => <ErrorIcon />,
}
