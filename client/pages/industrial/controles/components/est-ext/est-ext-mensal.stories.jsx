import { EsterilizacaoExternaMensal } from '@/client/pages/industrial/controles/components/est-ext/est-ext-mensal.jsx'
import { esterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.mjs'

const meta = {
  component: EsterilizacaoExternaMensal,
}

export default meta

export const Default = {
  render: () => {
    return <EsterilizacaoExternaMensal store={esterilizacaoExternaStore} />
  },
}
