import { OperacaoMensal } from '@/client/pages/industrial/controles/components/operacao/operacao-mensal.js'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import '@/utils/mocks/core.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoMensal> = {
  component: OperacaoMensal,
}

export default meta
type Story = StoryObj<typeof OperacaoMensal>

export const Default: Story = {
  render: () => {
    return <OperacaoMensal store={operacaoStore} />
  },
}
