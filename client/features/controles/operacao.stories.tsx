import { Operacao } from '@/client/features/controles/operacao'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao',
}

function OperacaoStory() {
  return (
    <>
      <Operacao />
    </>
  )
}

export const Default: Story = () => <OperacaoStory />
