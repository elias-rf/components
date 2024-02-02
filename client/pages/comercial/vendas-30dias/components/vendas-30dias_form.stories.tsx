import { vendas30DiasStore } from '@/client/pages/comercial/vendas-30dias/components/vendas-30dias.store.js'
import type { Meta, StoryObj } from '@storybook/react'
import { Vendas30dias } from './vendas-30dias_form.js'

const meta: Meta<typeof Vendas30dias> = {
  component: Vendas30dias,
}

export default meta
type Story = StoryObj<typeof Vendas30dias>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Vendas30dias store={vendas30DiasStore} />
      </>
    )
  },
}
