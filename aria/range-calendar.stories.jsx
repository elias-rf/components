import { RangeCalendar } from './range-calendar.jsx'

const meta = {
  component: RangeCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => (
  <RangeCalendar
    aria-label="Trip dates"
    {...args}
  />
)
