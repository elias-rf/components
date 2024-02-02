import { EsterilizacaoExternaProduto } from '@/client/pages/industrial/controles/components/est-ext/est-ext-produto.js'
import { esterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoExternaProduto> = {
  component: EsterilizacaoExternaProduto,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoExternaProduto>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoExternaProduto store={esterilizacaoExternaStore} />
  },
}
