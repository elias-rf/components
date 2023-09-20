import type { Meta, StoryObj } from '@storybook/react'
import { CloseIcon } from './close-icon'

const meta: Meta<typeof CloseIcon> = {
  component: CloseIcon,
}

export default meta
type Story = StoryObj<typeof CloseIcon>

export const Default: Story = {
  render: () => <CloseIcon />,
}
