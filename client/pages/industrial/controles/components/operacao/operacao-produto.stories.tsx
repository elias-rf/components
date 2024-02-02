import { OperacaoProduto } from '@/client/pages/industrial/controles/components/operacao/operacao-produto.js'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoProduto> = {
  component: OperacaoProduto,
}

export default meta
type Story = StoryObj<typeof OperacaoProduto>

export const Operacao_Produto: Story = {
  render: () => {
    return <OperacaoProduto store={operacaoStore} />
  },
}
