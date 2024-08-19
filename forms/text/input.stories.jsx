import { useArgs } from '@storybook/preview-api'
import { Input } from './input.jsx'

const meta = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: 'valor',
  },
}

export default meta

export const Example = {
  render: (args) => {
    const [{ value }, updateArgs] = useArgs()

    function onChange(event) {
      updateArgs({ value: event.target.value })
    }

    return (
      <Input
        {...args}
        onChange={onChange}
        value={value}
      />
    )
  },
}
