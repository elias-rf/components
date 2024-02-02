import { OperacaoModelo } from '@/client/pages/industrial/controles/components/operacao/operacao-modelo.js'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoModelo> = {
  component: OperacaoModelo,
}

export default meta
type Story = StoryObj<typeof OperacaoModelo>

export const Operacao_Modelo: Story = {
  render: () => {
    return <OperacaoModelo store={operacaoStore} />
  },
}
