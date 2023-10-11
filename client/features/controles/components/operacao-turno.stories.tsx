import { OperacaoTurno } from '@/client/features/controles/components/operacao-turno'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-turno',
}

export const Default: Story = () => {
  return (
    <OperacaoTurno
      operacao={[['operacao', '3058']]}
      dia={[['dia', '2020-01-01']]}
      onSelection={(event: any) => console.log(event)}
    />
  )
}
