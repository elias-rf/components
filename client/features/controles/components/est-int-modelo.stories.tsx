import { EsterilizacaoInternaModelo } from '@/client/features/controles/components/est-int-modelo'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int-modelo',
}

export const Default: Story = () => {
  return (
    <EsterilizacaoInternaModelo
      diaCorrente={[['dia', '2020-01-01']]}
      produtoCorrente={[['produto', 'cat1']]}
    />
  )
}
