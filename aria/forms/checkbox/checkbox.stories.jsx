import { useArgs } from '@storybook/preview-api'
import { fn } from '@storybook/test'
import { Checkbox } from './checkbox.jsx'

export default {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    isSelected: false,
    isDisabled: false,
    isInvalid: false,
    isIndeterminate: false,
    value: 'valor',
    children: 'Checkbox',
    onChange: fn(),
  },
}

export const Default = {
  render: (args) => {
    const [{ isSelected }, updateArgs] = useArgs()

    function onChange() {
      updateArgs({ isSelected: !isSelected })
    }

    return (
      <Checkbox
        {...args}
        onChange={onChange}
        isChecked={isSelected}
      />
    )
  },
}
