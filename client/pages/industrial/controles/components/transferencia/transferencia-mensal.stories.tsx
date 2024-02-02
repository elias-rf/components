import { TransferenciaMensal } from '@/client/pages/industrial/controles/components/transferencia/transferencia-mensal.js'
import { transferenciaStore } from '@/client/pages/industrial/controles/components/transferencia/transferencia.store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TransferenciaMensal> = {
  component: TransferenciaMensal,
}

export default meta
type Story = StoryObj<typeof TransferenciaMensal>

export const Transferencia_Mensal: Story = {
  render: () => {
    return <TransferenciaMensal store={transferenciaStore} />
  },
}
