import { Slider } from './slider.jsx'

const meta = {
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => <Slider {...args} />

Example.args = {
  label: 'Range',
  defaultValue: [30, 60],
  thumbLabels: ['start', 'end'],
}
