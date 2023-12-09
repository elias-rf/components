import { OperacaoDiario } from '@/client/features/indutrial/controles/components/operacao-diario.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-diario',
}

export const Operacao_Diario: Story = () => {
  return <OperacaoDiario />
}
