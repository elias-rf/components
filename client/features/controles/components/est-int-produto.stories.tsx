import { EsterilizacaoInternaProduto } from '@/client/features/controles/components/est-int-produto'
import '@/client/features/controles/controles_store.mock'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int-produto',
}

export const Default: Story = () => {
  return <EsterilizacaoInternaProduto />
}
