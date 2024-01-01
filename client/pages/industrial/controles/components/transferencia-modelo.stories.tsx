import { TransferenciaModelo } from '@/client/pages/industrial/controles/components/transferencia-modelo.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TransferenciaModelo> = {
  component: TransferenciaModelo,
}

export default meta
type Story = StoryObj<typeof TransferenciaModelo>

export const Transferencia_Modelo: Story = {
  render: () => {
    return <TransferenciaModelo />
  },
}
