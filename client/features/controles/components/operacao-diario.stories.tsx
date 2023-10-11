import { OperacaoDiario } from '@/client/features/controles/components/operacao-diario'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-diario',
}

export const Operacao_Diario: Story = () => {
  function handleSelection(e: any) {
    console.log(e)
  }
  return (
    <OperacaoDiario
      operacao={[['operacao', '3059']]}
      mes={[['mes', '2020-01']]}
      diaCorrente={[['dia', '2020-01-01']]}
      onSelection={handleSelection}
    />
  )
}
