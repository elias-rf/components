import { OperacaoDiario } from '@/client/pages/industrial/controles/components/operacao-diario.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-diario',
}

export const Operacao_Diario: Story = () => {
  return <OperacaoDiario />
}
