import { OperacaoMensal } from '@/client/features/controles/components/operacao-mensal.js'
import '@/client/features/controles/controles_store.mock'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-mensal',
}

export const Default: Story = () => {
  return <OperacaoMensal />
}
