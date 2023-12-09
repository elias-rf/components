import { EsterilizacaoInternaProduto } from '@/client/features/indutrial/controles/components/est-int-produto.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int-produto',
}

export const Default: Story = () => {
  return <EsterilizacaoInternaProduto />
}
