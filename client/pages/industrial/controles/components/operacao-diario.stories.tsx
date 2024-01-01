import { OperacaoDiario } from '@/client/pages/industrial/controles/components/operacao-diario.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoDiario> = {
  component: OperacaoDiario,
}

export default meta
type Story = StoryObj<typeof OperacaoDiario>

export const Operacao_Diario: Story = {
  render: () => {
    return <OperacaoDiario />
  },
}
