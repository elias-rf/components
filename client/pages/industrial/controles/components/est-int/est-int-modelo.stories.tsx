import { EsterilizacaoInternaModelo } from '@/client/pages/industrial/controles/components/est-int/est-int-modelo.js'
import { esterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EsterilizacaoInternaModelo> = {
  component: EsterilizacaoInternaModelo,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoInternaModelo>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoInternaModelo store={esterilizacaoInternaStore} />
  },
}
