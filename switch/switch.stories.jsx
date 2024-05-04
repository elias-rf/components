import { Label } from '../label/label.jsx'
import { Switch } from './switch.jsx'

const meta = {
  component: Switch,
}

export default meta

export const Default = {
  render: (props) => (
    <>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </>
  ),
}
