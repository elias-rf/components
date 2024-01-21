import { Operacao } from '@/client/pages/industrial/controles/components/operacao/operacao.js'
import '@/client/pages/industrial/controles/controles-store.mock.js'
import '@/utils/mocks/core.mock.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof OperacaoStory> = {
  component: OperacaoStory,
}

export default meta
type Story = StoryObj<typeof OperacaoStory>

function OperacaoStory() {
  return (
    <>
      <Operacao />
    </>
  )
}

export const Default: Story = { render: () => <OperacaoStory /> }
