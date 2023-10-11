import { EsterilizacaoInternaDiario } from '@/client/features/controles/components/est-int-diario'
import { TSelection } from '@/types'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int-diario',
}

export const Default: Story = () => {
  return (
    <EsterilizacaoInternaDiario
      mesCorrente={[['mes', '2020-01']]}
      diaCorrente={[['dia', '2020-01-01']]}
      onSelection={(event: TSelection<any>) => console.log(event)}
    />
  )
}
