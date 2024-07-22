import { Form } from 'react-aria-components'
import { Button } from './button.jsx'
import { NumberField } from './forms/number-field.jsx'

const meta = {
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Cookies',
  },
}

export default meta

export const Example = (args) => <NumberField {...args} />

export const Validation = (args) => (
  <Form className="flex flex-col items-start gap-2">
    <NumberField {...args} />
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
