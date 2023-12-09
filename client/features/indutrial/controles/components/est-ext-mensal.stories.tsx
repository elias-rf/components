import '@/mocks/fetcher-mock'

import { EsterilizacaoExternaMensal } from '@/client/features/indutrial/controles/components/est-ext-mensal.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Story } from '@ladle/react'

fetcherMock({
  'esterilizacaoExterna/mensal': () => {
    return [
      {
        mes: '2020-01',
        quantidade: 10,
      },
    ]
  },
})

export default {
  title: 'features/controles/est_ext/est-ext-mensal',
}

export const Default: Story = () => {
  return <EsterilizacaoExternaMensal />
}
