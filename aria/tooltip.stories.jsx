import { PrinterIcon, SaveIcon } from 'lucide-react'
import { TooltipTrigger } from 'react-aria-components'
import { Button } from './button.jsx'
import { Tooltip } from './tooltip.jsx'

const meta = {
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => (
  <div className="flex gap-2">
    <TooltipTrigger>
      <Button
        variant="secondary"
        className="px-2"
      >
        <SaveIcon className="h-5 w-5" />
      </Button>
      <Tooltip {...args}>Save</Tooltip>
    </TooltipTrigger>
    <TooltipTrigger>
      <Button
        variant="secondary"
        className="px-2"
      >
        <PrinterIcon className="h-5 w-5" />
      </Button>
      <Tooltip {...args}>Print</Tooltip>
    </TooltipTrigger>
  </div>
)
