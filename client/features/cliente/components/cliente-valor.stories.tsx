import { ClienteValor } from '@/client/features/cliente/components/cliente-valor'
import type { Story } from '@ladle/react'

export default {
  title: 'features/cliente/cliente-valor',
  args: {
    id: 1,
  },
}

export const Valor: Story = (props: any) => {
  return (
    <ClienteValor
      id={props.id}
      dia="2020-02-01"
    />
  )
}
