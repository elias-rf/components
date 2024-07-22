import { useArgs } from '@storybook/preview-api'
import { fn } from '@storybook/test'
import { CheckboxField } from './checkbox-field.jsx'

export default {
  component: CheckboxField,
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
    description: 'descrição',
    errorMessage: 'error',
  },
}

export const Default = {
  args: {},
  render: (args) => {
    const [{ isSelected }, updateArgs] = useArgs()

    function onChange() {
      updateArgs({ isSelected: !isSelected })
    }

    return (
      <CheckboxField
        {...args}
        onChange={onChange}
        isSelected={isSelected}
      />
    )
  },
}
