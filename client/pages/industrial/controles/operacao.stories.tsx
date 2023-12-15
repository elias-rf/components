import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Operacao } from '@/client/pages/industrial/controles/operacao.js'
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
