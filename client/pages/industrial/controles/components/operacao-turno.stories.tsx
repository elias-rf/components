import { OperacaoTurno } from '@/client/pages/industrial/controles/components/operacao-turno.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoTurno> = {
  component: OperacaoTurno,
}

export default meta
type Story = StoryObj<typeof OperacaoTurno>

export const Default: Story = {
  render: () => {
    return <OperacaoTurno />
  },
}
