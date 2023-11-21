import { OperacaoDiario } from '@/client/features/controles/components/operacao-diario.js'
import '@/client/features/controles/controles_store.mock'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-diario',
}

export const Operacao_Diario: Story = () => {
  return <OperacaoDiario />
}
