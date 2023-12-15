import { OperacaoMensal } from '@/client/pages/industrial/controles/components/operacao-mensal.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-mensal',
}

export const Default: Story = () => {
  return <OperacaoMensal />
}
