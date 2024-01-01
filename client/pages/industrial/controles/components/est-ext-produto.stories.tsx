import { EsterilizacaoExternaProduto } from '@/client/pages/industrial/controles/components/est-ext-produto.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'esterilizacaoExterna/produto': () => {
    return [
      {
        produto: 'Produto 1',
        quantidade: 10,
      },
    ]
  },
})

const meta: Meta<typeof EsterilizacaoExternaProduto> = {
  component: EsterilizacaoExternaProduto,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoExternaProduto>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoExternaProduto />
  },
}
