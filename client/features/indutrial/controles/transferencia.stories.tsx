import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Transferencia } from '@/client/features/indutrial/controles/transferencia.js'
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
