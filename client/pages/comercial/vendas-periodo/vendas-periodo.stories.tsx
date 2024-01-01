import type { Meta, StoryObj } from '@storybook/react'
import { VendasPeriodo } from './vendas-periodo_table.js'

const meta: Meta<typeof VendasPeriodo> = {
  component: VendasPeriodo,
}

export default meta
type Story = StoryObj<typeof VendasPeriodo>

export const Default: Story = {
  render: () => {
    return (
      <>
        <VendasPeriodo />
      </>
    )
  },
}
