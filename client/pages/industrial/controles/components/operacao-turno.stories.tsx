import { OperacaoTurno } from '@/client/pages/industrial/controles/components/operacao-turno.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-turno',
}

export const Default: Story = () => {
  return <OperacaoTurno />
}
