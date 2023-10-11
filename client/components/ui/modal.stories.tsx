import { Modal, TModalProps } from '@/client/components/ui/modal'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'Components / UI / modal',
  argTypes: {
    onClose: { action: 'clicked' },
  },
  args: {
    show: true,
    closeable: true,
    title: <div className="text-blue-500">Modal box</div>,
  },
}

export const Default: Story<TModalProps> = (props: TModalProps) => {
  return (
    <Modal {...props}>
      <>MODAL CONTENT</>
    </Modal>
  )
}
