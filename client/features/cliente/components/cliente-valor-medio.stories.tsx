import { ClienteValorMedio } from '@/client/features/cliente/components/cliente-valor-medio'
import { Story } from '@ladle/react'

export default {
  title: 'features/cliente/cliente-valor-medio',
  args: {
    id: 1,
  },
}

export const ValorMedio: Story = () => {
  return <ClienteValorMedio />
}
