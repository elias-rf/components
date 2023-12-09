import { EsterilizacaoExternaModelo } from '@/client/features/indutrial/controles/components/est-ext-modelo.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Story } from '@ladle/react'

fetcherMock({
  'esterilizacaoExterna/modelo': () => {
    return [
      {
        modelo: 'Modelo 1',
        quantidade: 10,
      },
      {
        modelo: 'Modelo 2',
        quantidade: 20,
      },
    ]
  },
})

export default {
  title: 'features/controles/est_ext/est-ext-modelo',
}

export const Default: Story = () => {
  return <EsterilizacaoExternaModelo />
}
