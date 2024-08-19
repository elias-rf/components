import { fn } from '@storybook/test'
import { Button } from './button.jsx'

export default {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
  },
  args: {
    isDisabled: false,
    children: 'Button',
    onPress: fn(),
  },
}

export const Primary = {
  args: {
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    variant: 'secondary',
  },
}

export const Destructive = {
  args: {
    variant: 'destructive',
  },
}
