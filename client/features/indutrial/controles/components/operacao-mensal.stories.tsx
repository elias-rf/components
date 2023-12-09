import { OperacaoMensal } from '@/client/features/indutrial/controles/components/operacao-mensal.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-mensal',
}

export const Default: Story = () => {
  return <OperacaoMensal />
}
