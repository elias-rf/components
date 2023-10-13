import { ClienteValor } from '@/client/features/cliente/components/cliente-valor'
import type { Story } from '@ladle/react'

export default {
  title: 'features/cliente/cliente-valor',
  args: {
    id: 1,
  },
}

export const Valor: Story = () => {
  return <ClienteValor />
}
