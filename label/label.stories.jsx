import { Label } from './label.jsx'

const meta = {
  component: Label,
}

export default meta

export const Default = {
  render: (props) => (
    <>
      <div className="flex items-center space-x-2">
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </>
  ),
}
