import type { Meta, StoryObj } from '@storybook/react'
import { DelDocIcon } from './del-doc-icon'

const meta: Meta<typeof DelDocIcon> = {
  component: DelDocIcon,
}

export default meta
type Story = StoryObj<typeof DelDocIcon>

export const Default: Story = {
  render: () => <DelDocIcon />,
}
