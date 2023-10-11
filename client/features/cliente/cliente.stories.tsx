import { Cliente } from '@/client/features/cliente/cliente'
import { Story } from '@ladle/react'

export default {
  title: 'features/cliente/cliente',
}

export const Default: Story = () => {
  return (
    <>
      <Cliente />
    </>
  )
}
