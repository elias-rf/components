import type { Meta, StoryObj } from '@storybook/react'
import { NewDocIcon } from './new-doc-icon'

const meta: Meta<typeof NewDocIcon> = {
  component: NewDocIcon,
}

export default meta
type Story = StoryObj<typeof NewDocIcon>

export const Default: Story = {
  render: () => <NewDocIcon />,
}
