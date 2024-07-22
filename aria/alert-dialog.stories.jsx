import { fn } from '@storybook/test'
import { DialogTrigger } from 'react-aria-components'
import { AlertDialog } from './alert-dialog.jsx'
import { Button } from './button.jsx'
import { Modal } from './modal.jsx'

const meta = {
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = {
  args: {
    title: 'Delete folder',
    children:
      'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.',
    variant: 'destructive',
    cancelLabel: 'Cancel',
    actionLabel: 'Delete',
    onAction: fn(),
  },
  render: (args) => (
    <DialogTrigger>
      <Button variant="secondary">Delete…</Button>
      <Modal>
        <AlertDialog {...args} />
      </Modal>
    </DialogTrigger>
  ),
}
