import type { Story } from '@ladle/react'
import { Modal, TModalProps } from '@/client/components/ui/modal'
import { Button } from '@/client/components/ui/button'
import '@/client/index.css'

export const Default: Story<TModalProps> = (props: TModalProps) => {
  return (
    <Modal {...props}>
      <>
        <div className="p-6 space-y-6 dark:text-white">Mensagem de corpo</div>
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <Button onClick={() => alert('I accept')}>I accept</Button>
          <Button>Decline</Button>
        </div>
      </>
    </Modal>
  )
}

export default {
  argTypes: {
    onClose: { action: 'clicked' },
  },
  args: {
    show: true,
    closeable: true,
    title: <div className="text-blue-500">Modal box</div>,
  },
}
