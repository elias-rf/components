import { EsterilizacaoExternaModelo } from '@/client/pages/industrial/controles/components/est-ext/est-ext-modelo.jsx'
import { esterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.mjs'

const meta = {
  component: EsterilizacaoExternaModelo,
}

export default meta

export const Default = {
  render: () => {
    return <EsterilizacaoExternaModelo store={esterilizacaoExternaStore} />
  },
}
