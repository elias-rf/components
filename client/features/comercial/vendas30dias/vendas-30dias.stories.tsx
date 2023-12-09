import { Story } from '@ladle/react'
import { Vendas30dias } from './vendas-30dias.js'

export default {
  title: 'features/vendas/vendas 30 dias',
}

export const Default: Story = () => {
  return (
    <>
      <Vendas30dias />
    </>
  )
}
