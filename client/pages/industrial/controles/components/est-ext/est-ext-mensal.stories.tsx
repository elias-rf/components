import { EsterilizacaoExternaMensal } from '@/client/pages/industrial/controles/components/est-ext/est-ext-mensal.js'
import { esterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoExternaMensal> = {
  component: EsterilizacaoExternaMensal,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoExternaMensal>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoExternaMensal store={esterilizacaoExternaStore} />
  },
}
