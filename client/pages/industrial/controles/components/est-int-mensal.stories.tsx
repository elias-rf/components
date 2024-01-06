import '@/mocks/fetcher-mock'

import { EsterilizacaoInternaMensal } from '@/client/pages/industrial/controles/components/est-int-mensal.js'
import { fetcherMock } from '@/utils/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'esterilizacaoInterna/mensal': () => {
    return [
      {
        mes: '2020-01',
        quantidade: 10,
      },
    ]
  },
})

const meta: Meta<typeof EsterilizacaoInternaMensal> = {
  component: EsterilizacaoInternaMensal,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoInternaMensal>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoInternaMensal />
  },
}
