import { EsterilizacaoExternaModelo } from '@/client/pages/industrial/controles/components/est-ext-modelo.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'esterilizacaoExterna/modelo': () => {
    return [
      {
        modelo: 'Modelo 1',
        quantidade: 10,
      },
      {
        modelo: 'Modelo 2',
        quantidade: 20,
      },
    ]
  },
})

const meta: Meta<typeof EsterilizacaoExternaModelo> = {
  component: EsterilizacaoExternaModelo,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoExternaModelo>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoExternaModelo />
  },
}
