import { Meter } from './meter.jsx'

const meta = {
  component: Meter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => <Meter {...args} />

Example.args = {
  label: 'Storage space',
  value: 80,
}
