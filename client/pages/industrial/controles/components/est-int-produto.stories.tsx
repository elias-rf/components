import { EsterilizacaoInternaProduto } from '@/client/pages/industrial/controles/components/est-int-produto.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int-produto',
}

export const Default: Story = () => {
  return <EsterilizacaoInternaProduto />
}
