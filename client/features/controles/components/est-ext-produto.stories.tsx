import { EsterilizacaoExternaProduto } from '@/client/features/controles/components/est-ext-produto'
import { fetcherMock } from '@/mocks/fetcher-mock'
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
