import { TransferenciaDiario } from '@/client/pages/industrial/controles/components/transferencia-diario.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TransferenciaDiario> = {
  component: TransferenciaDiario,
}

export default meta
type Story = StoryObj<typeof TransferenciaDiario>

export const Transferencia_Diario: Story = {
  render: () => {
    return <TransferenciaDiario />
  },
}
