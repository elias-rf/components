import { HelpCircle } from 'lucide-react'
import { DialogTrigger, Heading } from 'react-aria-components'
import { Button } from './button.jsx'
import { Dialog } from './dialog.jsx'
import { Popover } from './popover.jsx'

const meta = {
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    showArrow: true,
  },
}

export default meta

export const Example = (args) => (
  <DialogTrigger>
    <Button
      variant="icon"
      aria-label="Help"
    >
      <HelpCircle className="h-4 w-4" />
    </Button>
    <Popover
      {...args}
      className="max-w-[250px]"
    >
      <Dialog>
        <Heading
          slot="title"
          className="mb-2 text-lg font-semibold"
        >
          Help
        </Heading>
        <p className="text-sm">
          For help accessing your account, please contact support.
        </p>
      </Dialog>
    </Popover>
  </DialogTrigger>
)
