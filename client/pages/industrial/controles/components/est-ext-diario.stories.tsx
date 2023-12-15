import { EsterilizacaoExternaDiario } from '@/client/pages/industrial/controles/components/est-ext-diario.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_ext/est-ext-diario',
}

export const Default: Story = () => {
  return <EsterilizacaoExternaDiario />
}
