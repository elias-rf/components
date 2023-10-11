import { EsterilizacaoExternaProduto } from '@/client/features/controles/components/est-ext-produto'
import { TSelection } from '@/types'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_ext/est-ext-produto',
}

export const Default: Story = () => {
  return (
    <EsterilizacaoExternaProduto
      diaCorrente={[['dia', '2020-01-01']]}
      produtoCorrente={[['produto', 'cat1']]}
      onSelection={(event: TSelection<any>) => console.log(event)}
    />
  )
}
