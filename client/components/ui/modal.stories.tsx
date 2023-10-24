import { Modal, TModalProps } from '@/client/components/ui/modal'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import { useState } from 'react'

export default {
  title: 'Components / UI / modal',
  argTypes: {
    onClose: { action: 'clicked' },
  },
}

export const Default: Story<TModalProps> = () => {
  const [show, setShow] = useState(true)
  return (
    <Modal
      title={<div className="text-blue-500">Modal box</div>}
      show={show}
      closeable
      onClose={() => setShow(false)}
    >
      <>MODAL CONTENT</>
    </Modal>
  )
}
