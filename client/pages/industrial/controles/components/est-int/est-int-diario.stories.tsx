import { EsterilizacaoInternaDiario } from '@/client/pages/industrial/controles/components/est-int/est-int-diario.js'
import { esterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoInternaDiario> = {
  component: EsterilizacaoInternaDiario,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoInternaDiario>

esterilizacaoInternaStore.setMes([['mes', '2020-01']])

export const Default: Story = {
  render: () => {
    return <EsterilizacaoInternaDiario store={esterilizacaoInternaStore} />
  },
}
