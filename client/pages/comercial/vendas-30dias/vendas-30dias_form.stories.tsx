import { vendas30DiasStore } from '@/client/pages/comercial/vendas-30dias/vendas-30dias.store.js'
import { authStore } from '@/client/store/auth_store.js'
import { Story } from '@ladle/react'
import { Vendas30dias } from './vendas-30dias_form.js'

export default {
  title: 'features/vendas/vendas 30 dias',
}

export const Default: Story = () => {
  return (
    <>
      <Vendas30dias
        store={vendas30DiasStore}
        auth={authStore}
      />
    </>
  )
}
