import { EsterilizacaoExternaDiario } from '@/client/pages/industrial/controles/components/est-ext/est-ext-diario.jsx'
import { esterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.mjs'

const meta = {
  component: EsterilizacaoExternaDiario,
}

export default meta

esterilizacaoExternaStore.setMes([['mes', '2020-01']])

export const Default = {
  render: () => {
    return <EsterilizacaoExternaDiario store={esterilizacaoExternaStore} />
  },
}
