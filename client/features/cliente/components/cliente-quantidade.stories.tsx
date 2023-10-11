import { ClienteQuantidade } from '@/client/features/cliente/components/cliente-quantidade'
import { Story } from '@ladle/react'

export default {
  title: 'features/cliente/cliente-quantidade',
  args: {
    id: 1,
  },
}

export const Quantidade: Story = (props: any) => {
  return (
    <ClienteQuantidade
      id={props.id}
      dia="2020-02-01"
    />
  )
}
