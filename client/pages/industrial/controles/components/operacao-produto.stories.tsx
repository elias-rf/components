import { OperacaoProduto } from '@/client/pages/industrial/controles/components/operacao-produto.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoProduto> = {
  component: OperacaoProduto,
}

export default meta
type Story = StoryObj<typeof OperacaoProduto>

export const Operacao_Produto: Story = {
  render: () => {
    return <OperacaoProduto />
  },
}
