import { TransferenciaMensal } from '@/client/pages/industrial/controles/components/transferencia-mensal.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TransferenciaMensal> = {
  component: TransferenciaMensal,
}

export default meta
type Story = StoryObj<typeof TransferenciaMensal>

export const Transferencia_Mensal: Story = {
  render: () => {
    return <TransferenciaMensal />
  },
}
