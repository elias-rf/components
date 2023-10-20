import '@/client/features/controles/controles_store.mock'
import { Transferencia } from '@/client/features/controles/transferencia'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia',
}

export const Default: Story = () => {
  return (
    <>
      <Transferencia />
    </>
  )
}
