import '@/mocks/fetcher-mock'

import { EsterilizacaoInternaMensal } from '@/client/features/controles/components/est-int-mensal'
import { fetcherMock } from '@/mocks/fetcher-mock'
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
