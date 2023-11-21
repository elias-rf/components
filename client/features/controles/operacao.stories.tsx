import '@/client/features/controles/controles_store.mock'
import { Operacao } from '@/client/features/controles/operacao.js'
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
