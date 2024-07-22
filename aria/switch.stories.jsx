import { Switch } from './switch.jsx'

const meta = {
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => <Switch {...args}>Wi-Fi</Switch>
