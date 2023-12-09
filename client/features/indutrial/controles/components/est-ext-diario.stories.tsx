import { EsterilizacaoExternaDiario } from '@/client/features/indutrial/controles/components/est-ext-diario.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_ext/est-ext-diario',
}

export const Default: Story = () => {
  return <EsterilizacaoExternaDiario />
}
