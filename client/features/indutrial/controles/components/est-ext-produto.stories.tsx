import { EsterilizacaoExternaProduto } from '@/client/features/indutrial/controles/components/est-ext-produto.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Story } from '@ladle/react'

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

export default {
  title: 'features/controles/est_ext/est-ext-produto',
}

export const Default: Story = () => {
  return <EsterilizacaoExternaProduto />
}
