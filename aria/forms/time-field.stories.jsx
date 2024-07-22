import { Form } from 'react-aria-components'
import { Button } from '../button.jsx'
import { TimeField } from './time-field.jsx'

const meta = {
  component: TimeField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Event time',
  },
}

export default meta

export const Example = (args) => <TimeField {...args} />

export const Validation = (args) => (
  <Form className="flex flex-col items-start gap-2">
    <TimeField {...args} />
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
