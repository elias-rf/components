import { Modal, TModalProps } from '@/client/components/ui-old/modal/modal.jsx'
import { useState } from 'react'

const meta = {
  component: Modal,
  argTypes: {
    onClose: { action: 'clicked' },
  },
}
export default meta

export const Default = {
  render: () => {
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
  },
}
