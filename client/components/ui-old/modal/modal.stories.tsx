import { Modal, TModalProps } from '@/client/components/ui-old/modal/modal.js'

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Modal> = {
  component: Modal,
  argTypes: {
    onClose: { action: 'clicked' },
  },
}
export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
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
