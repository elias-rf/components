import { EsterilizacaoInternaDiario } from '@/client/pages/industrial/controles/components/est-int-diario.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Story } from '@ladle/react'

fetcherMock({
  'esterilizacaoInterna/diario': () => {
    return [
      {
        dia: '2020-01-01',
        quantidade: 10,
        dia_semana: 'qua',
      },
    ]
  },
})

export default {
  title: 'features/controles/est_int/est-int-diario',
}

export const Default: Story = () => {
  return <EsterilizacaoInternaDiario />
}
