import { Chip, TChipProps } from '@/client/components/ui/chip.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'components / ui / chip',
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

export const Default: Story<TChipProps> = (props: TChipProps) => {
  return (
    <>
      <Chip {...props}>{props.children}</Chip>
    </>
  )
}
