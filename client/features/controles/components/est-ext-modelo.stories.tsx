import { EsterilizacaoExternaModelo } from '@/client/features/controles/components/est-ext-modelo'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_ext/est-ext-modelo',
}

export const Default: Story = () => {
  return (
    <EsterilizacaoExternaModelo
      diaCorrente={[['dia', '2020-01-01']]}
      produtoCorrente={[['produto', 'cat1']]}
    />
  )
}
