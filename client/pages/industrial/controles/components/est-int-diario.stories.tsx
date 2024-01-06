import { EsterilizacaoInternaDiario } from '@/client/pages/industrial/controles/components/est-int-diario.js'
import { fetcherMock } from '@/utils/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'esterilizacaoInterna/diario': () => {
    return [
      {
        dia: '2020-01-01',
        quantidade: 10,
        dia_semana: 'qua',
      },
    ]
  },
})

const meta: Meta<typeof EsterilizacaoInternaDiario> = {
  component: EsterilizacaoInternaDiario,
}

export default meta
type Story = StoryObj<typeof EsterilizacaoInternaDiario>

export const Default: Story = {
  render: () => {
    return <EsterilizacaoInternaDiario />
  },
}
