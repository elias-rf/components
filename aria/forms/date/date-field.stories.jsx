import { Form } from 'react-aria-components'
import { Button } from '../../button.jsx'
import { DateField } from './date-field.jsx'

const meta = {
  component: DateField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Event date',
  },
}

export default meta

export const Example = (args) => <DateField {...args} />

export const Validation = (args) => (
  <Form className="flex flex-col items-start gap-2">
    <DateField {...args} />
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
