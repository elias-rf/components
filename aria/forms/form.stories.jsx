import { Button } from '../button.jsx'
import { DateField } from './date/date-field.jsx'
import { Form } from './form.jsx'
import { TextField } from './text-field.jsx'

const meta = {
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => (
  <Form {...args}>
    <TextField
      label="Email"
      name="email"
      type="email"
      isRequired
    />
    <DateField
      label="Birth date"
      isRequired
    />
    <div className="flex gap-2">
      <Button type="submit">Submit</Button>
      <Button
        type="reset"
        variant="secondary"
      >
        Reset
      </Button>
    </div>
  </Form>
)
