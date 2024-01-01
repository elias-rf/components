import { EsterilizacaoExternaDiario } from '@/client/pages/industrial/controles/components/est-ext-diario.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoExternaDiario> = {
  component: EsterilizacaoExternaDiario,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoExternaDiario>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoExternaDiario />
  },
}
