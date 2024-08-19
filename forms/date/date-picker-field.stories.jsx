import { Form } from 'react-aria-components'
import { Button } from '../../button.jsx'
import { DatePicker } from './date-picker-field.jsx'

const meta = {
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Event date',
  },
}

export default meta

export const Example = (args) => <DatePicker {...args} />

export const Validation = (args) => (
  <Form className="flex flex-col items-start gap-2">
    <DatePicker {...args} />
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
