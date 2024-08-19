import { Form } from 'react-aria-components'
import { Button } from '../../button.jsx'
import { TextField } from './text-field.jsx'

const meta = {
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Name',
  },
}

export default meta

export const Example = (args) => <TextField {...args} />

export const Validation = (args) => (
  <Form className="flex flex-col items-start gap-2">
    <TextField {...args} />
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
