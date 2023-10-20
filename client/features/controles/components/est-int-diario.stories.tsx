import { EsterilizacaoInternaDiario } from '@/client/features/controles/components/est-int-diario'
import { fetcherMock } from '@/mocks/fetcher-mock'
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
