import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Transferencia } from '@/client/pages/industrial/controles/transferencia.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Transferencia> = {
  component: Transferencia,
}

export default meta
type Story = StoryObj<typeof Transferencia>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Transferencia />
      </>
    )
  },
}
