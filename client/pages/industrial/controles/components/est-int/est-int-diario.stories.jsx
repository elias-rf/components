import { EsterilizacaoInternaDiario } from '@/client/pages/industrial/controles/components/est-int/est-int-diario.jsx'
import { esterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.mjs'

const meta = {
  component: EsterilizacaoInternaDiario,
}

export default meta

esterilizacaoInternaStore.setMes([['mes', '2020-01']])

export const Default = {
  render: () => {
    return <EsterilizacaoInternaDiario store={esterilizacaoInternaStore} />
  },
}
