import { EsterilizacaoInternaProduto } from '@/client/pages/industrial/controles/components/est-int-produto.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoInternaProduto> = {
  component: EsterilizacaoInternaProduto,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoInternaProduto>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoInternaProduto />
  },
}
