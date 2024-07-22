import { ProgressBar } from './progress-bar.jsx'

const meta = {
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => <ProgressBar {...args} />

Example.args = {
  label: 'Loading…',
  value: 80,
}
