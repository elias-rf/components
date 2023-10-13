import { ClienteQuantidade } from '@/client/features/cliente/components/cliente-quantidade'
import { Story } from '@ladle/react'

export default {
  title: 'features/cliente/cliente-quantidade',
  args: {
    id: 1,
  },
}

export const Quantidade: Story = () => {
  return <ClienteQuantidade />
}
