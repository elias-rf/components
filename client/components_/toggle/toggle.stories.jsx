import { FontBoldIcon } from '@radix-ui/react-icons'
import { Toggle } from './toggle.jsx'

const meta = {
  component: Toggle,
}

export default meta

export const Default = {
  render: (props) => (
    <>
      <Toggle aria-label="Toggle italic">
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>
    </>
  ),
}
