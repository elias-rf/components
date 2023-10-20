import { OperacaoModelo } from '@/client/features/controles/components/operacao-modelo'
import '@/client/features/controles/controles_store.mock'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-modelo',
}

export const Operacao_Modelo: Story = () => {
  return <OperacaoModelo />
}
