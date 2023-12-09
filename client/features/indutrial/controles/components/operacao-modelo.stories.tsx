import { OperacaoModelo } from '@/client/features/indutrial/controles/components/operacao-modelo.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-modelo',
}

export const Operacao_Modelo: Story = () => {
  return <OperacaoModelo />
}
