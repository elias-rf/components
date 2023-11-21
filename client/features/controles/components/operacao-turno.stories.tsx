import { OperacaoTurno } from '@/client/features/controles/components/operacao-turno.js'
import '@/client/features/controles/controles_store.mock'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-turno',
}

export const Default: Story = () => {
  return <OperacaoTurno />
}
