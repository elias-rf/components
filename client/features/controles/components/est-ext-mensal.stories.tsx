import { EsterilizacaoExternaMensal } from '@/client/features/controles/components/est-ext-mensal'
import { TSelection } from '@/types'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_ext/est-ext-mensal',
}

export const Default: Story = () => {
  return (
    <EsterilizacaoExternaMensal
      mesInicial={[['mes', '2020-01']]}
      mesCorrente={[['mes', '2020-01']]}
      onSelection={(event: TSelection<any>) => console.log(event)}
    />
  )
}
