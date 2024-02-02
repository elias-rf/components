import { Chip, TChipProps } from '@/client/components/ui-old/chip/chip.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Chip> = {
  component: Chip,
  args: {
    name: 'chip1',
    children: 'Chip text',
    size: 'md',
    color: 'primary',
    disabled: false,
    outline: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onClose: { action: 'closed' },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'alternative',
        'dark',
        'light',
        'green',
        'red',
        'yellow',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  render: (props: TChipProps) => {
    return (
      <>
        <Chip {...props}>{props.children}</Chip>
      </>
    )
  },
}
