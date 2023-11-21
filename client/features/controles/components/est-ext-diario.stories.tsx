import { EsterilizacaoExternaDiario } from '@/client/features/controles/components/est-ext-diario.js'
import '@/client/features/controles/controles_store.mock'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_ext/est-ext-diario',
}

export const Default: Story = () => {
  return <EsterilizacaoExternaDiario />
}
