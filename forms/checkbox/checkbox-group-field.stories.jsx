import { Form } from 'react-aria-components'
import { Button } from '../../button.jsx'
import { CheckboxGroup } from './checkbox-group-field.jsx'
import { Checkbox } from './checkbox.jsx'

export default {
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    label: 'Cities',
    isDisabled: false,
    isRequired: false,
    description: '',
    children: (
      <>
        <Checkbox value="sf">San Francisco</Checkbox>
        <Checkbox value="ny">New York</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </>
    ),
  },
}

export const Default = {
  args: {},
}

export const Validation = (args) => (
  <Form className="flex flex-col items-start gap-2">
    <CheckboxGroup {...args} />
    <Button
      type="submit"
      variant="secondary"
    >
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}
