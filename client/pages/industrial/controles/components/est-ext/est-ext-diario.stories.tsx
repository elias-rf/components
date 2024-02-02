import { EsterilizacaoExternaDiario } from '@/client/pages/industrial/controles/components/est-ext/est-ext-diario.js'
import { esterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoExternaDiario> = {
  component: EsterilizacaoExternaDiario,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoExternaDiario>

esterilizacaoExternaStore.setMes([['mes', '2020-01']])

export const Default: Story = {
  render: () => {
    return <EsterilizacaoExternaDiario store={esterilizacaoExternaStore} />
  },
}
