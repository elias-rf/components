import type { Story } from '@ladle/react'
import { Button, TButtonProps } from '@/client/components/ui/button'
import '@/client/index.css'

export default {
  args: {
    children: 'Button text',
    size: 'md',
    color: 'primary',
    disabled: false,
    outline: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
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

export const Default: Story<TButtonProps> = (props: TButtonProps) => {
  return (
    <>
      <Button {...props}>{props.children}</Button>
    </>
  )
}
