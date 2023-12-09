import '@/mocks/fetcher-mock'

import { EsterilizacaoInternaMensal } from '@/client/features/indutrial/controles/components/est-int-mensal.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Story } from '@ladle/react'

fetcherMock({
  'esterilizacaoInterna/mensal': () => {
    return [
      {
        mes: '2020-01',
        quantidade: 10,
      },
    ]
  },
})

export default {
  title: 'features/controles/est_int/est-int-mensal',
}

export const Default: Story = () => {
  return <EsterilizacaoInternaMensal />
}
