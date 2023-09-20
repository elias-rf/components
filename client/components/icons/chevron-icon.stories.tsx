import type { Meta, StoryObj } from '@storybook/react'
import { ChevronIcon } from './chevron-icon'

const meta: Meta<typeof ChevronIcon> = {
  component: ChevronIcon,
}

export default meta
type Story = StoryObj<typeof ChevronIcon>

export const Default: Story = {
  argTypes: {
    variant: {
      options: ['right', 'down', 'left', 'up'],
      control: { type: 'radio' },
    },
  },

  render: (props: any) => <ChevronIcon {...props} />,
}
