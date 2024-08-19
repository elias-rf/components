import { Calendar } from './calendar.jsx'

const meta = {
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => (
  <Calendar
    aria-label="Event date"
    {...args}
  />
)
