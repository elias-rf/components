import { EsterilizacaoExternaDiario } from '@/client/features/controles/components/est-ext-diario'
import { TSelection } from '@/types'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_ext/est-ext-diario',
}

export const Default: Story = () => {
  return (
    <EsterilizacaoExternaDiario
      mesCorrente={[['mes', '2020-01']]}
      diaCorrente={[['dia', '2020-01-01']]}
      onSelection={(event: TSelection<any>) => console.log(event)}
    />
  )
}
