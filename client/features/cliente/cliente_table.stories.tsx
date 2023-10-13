import { ClienteTable } from '@/client/features/cliente/cliente_table'
import { Story } from '@ladle/react'

export default {
  title: 'features/cliente/cliente',
}

export const Default: Story = () => {
  return (
    <>
      <ClienteTable />
    </>
  )
}
