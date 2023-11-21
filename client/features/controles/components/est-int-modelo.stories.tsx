import { EsterilizacaoInternaModelo } from '@/client/features/controles/components/est-int-modelo.js'
import '@/client/features/controles/controles_store.mock'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int-modelo',
}

export const Default: Story = () => {
  return <EsterilizacaoInternaModelo />
}
