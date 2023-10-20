import '@/client/features/controles/controles_store.mock'
import { EstInt } from '@/client/features/controles/est-int'
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
