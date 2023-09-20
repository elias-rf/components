import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
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
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
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
type Story = StoryObj<typeof Button>

function ButtonAux(props: any) {
  return (
    <>
      <Button {...props}>{props.children}</Button>
    </>
  )
}

export const Default: Story = {
  render: (props) => {
    return <ButtonAux {...props} />
  },
}
