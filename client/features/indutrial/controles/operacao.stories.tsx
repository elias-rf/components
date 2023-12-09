import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Operacao } from '@/client/features/indutrial/controles/operacao.js'
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
