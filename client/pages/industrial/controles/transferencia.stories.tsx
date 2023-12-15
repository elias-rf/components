import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Transferencia } from '@/client/pages/industrial/controles/transferencia.js'
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
