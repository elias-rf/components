import { EsterilizacaoExternaModelo } from '@/client/pages/industrial/controles/components/est-ext/est-ext-modelo.js'
import { esterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoExternaModelo> = {
  component: EsterilizacaoExternaModelo,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoExternaModelo>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoExternaModelo store={esterilizacaoExternaStore} />
  },
}
