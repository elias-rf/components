import { EsterilizacaoInternaModelo } from '@/client/pages/industrial/controles/components/est-int-modelo.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoInternaModelo> = {
  component: EsterilizacaoInternaModelo,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoInternaModelo>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoInternaModelo />
  },
}
