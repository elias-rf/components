import '@/client/features/indutrial/controles/controles_store.mock.js'
import { EstInt } from '@/client/features/indutrial/controles/est-int.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_int/est-int',
}

export const Default: Story = () => {
  return (
    <>
      <EstInt />
    </>
  )
}
