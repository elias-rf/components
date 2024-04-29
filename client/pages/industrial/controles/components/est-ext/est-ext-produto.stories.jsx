import { EsterilizacaoExternaProduto } from '@/client/pages/industrial/controles/components/est-ext/est-ext-produto.jsx'
import { esterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.mjs'

const meta = {
  component: EsterilizacaoExternaProduto,
}

export default meta

export const Default = {
  render: () => {
    return <EsterilizacaoExternaProduto store={esterilizacaoExternaStore} />
  },
}
