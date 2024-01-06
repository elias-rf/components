import '@/mocks/fetcher-mock'

import { EsterilizacaoExternaMensal } from '@/client/pages/industrial/controles/components/est-ext-mensal.js'
import { fetcherMock } from '@/utils/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'esterilizacaoExterna/mensal': () => {
    return [
      {
        mes: '2020-01',
        quantidade: 10,
      },
    ]
  },
})

const meta: Meta<typeof EsterilizacaoExternaMensal> = {
  component: EsterilizacaoExternaMensal,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoExternaMensal>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoExternaMensal />
  },
}
