import { EsterilizacaoInternaModelo } from '@/client/pages/industrial/controles/components/est-int-modelo.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int-modelo',
}

export const Default: Story = () => {
  return <EsterilizacaoInternaModelo />
}
