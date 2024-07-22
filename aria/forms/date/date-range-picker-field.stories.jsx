import { Form } from 'react-aria-components'
import { Button } from '../../button.jsx'
import { DateRangePicker } from './date-range-picker-field.jsx'

const meta = {
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Trip dates',
  },
}

export default meta

export const Example = (args) => <DateRangePicker {...args} />

export const Validation = (args) => (
  <Form className="flex flex-col items-start gap-2">
    <DateRangePicker {...args} />
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
