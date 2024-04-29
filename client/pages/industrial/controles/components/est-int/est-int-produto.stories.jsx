import { EsterilizacaoInternaProduto } from '@/client/pages/industrial/controles/components/est-int/est-int-produto.jsx'
import { esterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.mjs'

const meta = {
  component: EsterilizacaoInternaProduto,
}

export default meta

export const Default = {
  render: () => {
    return <EsterilizacaoInternaProduto store={esterilizacaoInternaStore} />
  },
}
