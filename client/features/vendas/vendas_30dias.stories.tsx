import { Story } from '@ladle/react'
import { Vendas30dias } from './vendas_30dias'

export default {
  title: 'features/vendas/vendas_30dias',
}

export const Default: Story = () => {
  return (
    <>
      <Vendas30dias dia="2020-02-01" />
    </>
  )
}
