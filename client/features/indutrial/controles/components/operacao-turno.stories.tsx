import { OperacaoTurno } from '@/client/features/indutrial/controles/components/operacao-turno.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-turno',
}

export const Default: Story = () => {
  return <OperacaoTurno />
}
