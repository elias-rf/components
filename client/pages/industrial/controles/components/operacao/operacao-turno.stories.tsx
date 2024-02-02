import { OperacaoTurno } from '@/client/pages/industrial/controles/components/operacao/operacao-turno.js'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoTurno> = {
  component: OperacaoTurno,
}

export default meta
type Story = StoryObj<typeof OperacaoTurno>

export const Default: Story = {
  render: () => {
    return <OperacaoTurno store={operacaoStore} />
  },
}
