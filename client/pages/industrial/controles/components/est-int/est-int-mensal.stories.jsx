import { EsterilizacaoInternaMensal } from '@/client/pages/industrial/controles/components/est-int/est-int-mensal.jsx'
import { esterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.mjs'

const meta = {
  component: EsterilizacaoInternaMensal,
}

export default meta

export const Default = {
  render: () => {
    return <EsterilizacaoInternaMensal store={esterilizacaoInternaStore} />
  },
}
