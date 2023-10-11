import { EsterilizacaoInternaMensal } from '@/client/features/controles/components/est-int-mensal'
import { TSelection } from '@/types'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int-mensal',
}

export const Default: Story = () => {
  return (
    <EsterilizacaoInternaMensal
      mesInicial={[['mes', '2020-01']]}
      mesCorrente={[['mes', '2020-01']]}
      onSelection={(event: TSelection<any>) => console.log(event)}
    />
  )
}
