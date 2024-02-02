import { OperacaoDiario } from '@/client/pages/industrial/controles/components/operacao/operacao-diario.js'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoDiario> = {
  component: OperacaoDiario,
}

export default meta
type Story = StoryObj<typeof OperacaoDiario>

operacaoStore.setMes([['mes', '2020-01']])

export const Operacao_Diario: Story = {
  render: () => {
    return <OperacaoDiario store={operacaoStore} />
  },
}
