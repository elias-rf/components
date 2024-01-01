import { OperacaoModelo } from '@/client/pages/industrial/controles/components/operacao-modelo.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoModelo> = {
  component: OperacaoModelo,
}

export default meta
type Story = StoryObj<typeof OperacaoModelo>

export const Operacao_Modelo: Story = {
  render: () => {
    return <OperacaoModelo />
  },
}
