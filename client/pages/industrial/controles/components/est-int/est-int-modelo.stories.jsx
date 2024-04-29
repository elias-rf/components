import { EsterilizacaoInternaModelo } from '@/client/pages/industrial/controles/components/est-int/est-int-modelo.jsx'
import { esterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.mjs'

const meta = {
  component: EsterilizacaoInternaModelo,
}

export default meta

export const Default = {
  render: () => {
    return <EsterilizacaoInternaModelo store={esterilizacaoInternaStore} />
  },
}
