import type { Meta, StoryObj } from '@storybook/react'
import { SortIcon } from './sort-icon'

const meta: Meta<typeof SortIcon> = {
  component: SortIcon,
}

export default meta
type Story = StoryObj<typeof SortIcon>

export const Default: Story = {
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['up', 'down', 'both', 'none'],
    },
  },
  render: (props: any) => <SortIcon {...props} />,
}
