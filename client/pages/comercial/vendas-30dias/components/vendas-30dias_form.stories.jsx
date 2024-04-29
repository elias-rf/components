import { vendas30DiasStore } from '@/client/pages/comercial/vendas-30dias/components/vendas-30dias.store.mjs'
import { Vendas30dias } from './vendas-30dias_form.jsx'

const meta = {
  component: Vendas30dias,
}

export default meta

export const Default = {
  render: () => {
    return (
      <>
        <Vendas30dias store={vendas30DiasStore} />
      </>
    )
  },
}
