import { JsonView } from '@/client/components/json-view/json-view.js'
import { OperacaoMensal } from '@/client/pages/industrial/controles/components/operacao/operacao-mensal.js'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoMensal> = {
  component: OperacaoMensal,
}

export default meta
type Story = StoryObj<typeof OperacaoMensal>

export const Default: Story = {
  render: () => {
    const state = operacaoStore.state((state) => state)

    return (
      <>
        <OperacaoMensal store={operacaoStore} />
        <JsonView data={state} />
      </>
    )
  },
}
