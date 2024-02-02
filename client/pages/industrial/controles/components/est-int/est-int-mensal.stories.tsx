import { EsterilizacaoInternaMensal } from '@/client/pages/industrial/controles/components/est-int/est-int-mensal.js'
import { esterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoInternaMensal> = {
  component: EsterilizacaoInternaMensal,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoInternaMensal>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoInternaMensal store={esterilizacaoInternaStore} />
  },
}
