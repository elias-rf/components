import { TransferenciaDiario } from '@/client/pages/industrial/controles/components/transferencia/transferencia-diario.js'
import { transferenciaStore } from '@/client/pages/industrial/controles/components/transferencia/transferencia.store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TransferenciaDiario> = {
  component: TransferenciaDiario,
}

export default meta
type Story = StoryObj<typeof TransferenciaDiario>

export const Transferencia_Diario: Story = {
  render: () => {
    return <TransferenciaDiario store={transferenciaStore} />
  },
}
