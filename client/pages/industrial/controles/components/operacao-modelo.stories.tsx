import { OperacaoModelo } from '@/client/pages/industrial/controles/components/operacao-modelo.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-modelo',
}

export const Operacao_Modelo: Story = () => {
  return <OperacaoModelo />
}
