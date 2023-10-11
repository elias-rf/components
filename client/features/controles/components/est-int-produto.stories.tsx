import { EsterilizacaoInternaProduto } from '@/client/features/controles/components/est-int-produto'
import { TSelection } from '@/types'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int-produto',
}

export const Default: Story = () => {
  return (
    <EsterilizacaoInternaProduto
      diaCorrente={[['dia', '2020-01-01']]}
      produtoCorrente={[['produto', 'cat1']]}
      onSelection={(event: TSelection<any>) => console.log(event)}
    />
  )
}
