import { OperacaoMensal } from '@/client/pages/industrial/controles/components/operacao-mensal.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoMensal> = {
  component: OperacaoMensal,
}

export default meta
type Story = StoryObj<typeof OperacaoMensal>

export const Default: Story = {
  render: () => {
    return <OperacaoMensal />
  },
}
