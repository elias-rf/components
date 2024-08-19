import { Form } from 'react-aria-components'
import { Button } from '../button.jsx'
import { SearchField } from './search-field.jsx'

const meta = {
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Search',
  },
}

export default meta

export const Example = (args) => <SearchField {...args} />

export const Validation = (args) => (
  <Form className="flex flex-col items-start gap-2">
    <SearchField {...args} />
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
