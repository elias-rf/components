import { Operacao } from '@/client/pages/industrial/controles/components/operacao/operacao.jsx'

const meta = {
  component: OperacaoStory,
}

export default meta

function OperacaoStory() {
  return (
    <>
      <Operacao />
    </>
  )
}

export const Default = { render: () => <OperacaoStory /> }
