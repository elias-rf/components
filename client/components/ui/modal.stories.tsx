import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './modal'
import { Button } from '@/client/components/ui/button'

const meta: Meta<typeof Modal> = {
  component: Modal,
  argTypes: {
    onClose: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    show: true,
    closeable: true,
    title: <div className="text-blue-500">Modal box</div>,
    children: (
      <>
        <div className="p-6 space-y-6">Mensagem de corpo</div>
        {/* <!-- Modal footer --> */}
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <Button onClick={() => alert('I accept')}>I accept</Button>
          <Button>Decline</Button>
        </div>
      </>
    ),
  },
  render: (props: any) => <Modal {...props} />,
}
