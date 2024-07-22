import { ToggleButton } from './toggle-button.jsx'

const meta = {
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => <ToggleButton {...args}>Pin</ToggleButton>
