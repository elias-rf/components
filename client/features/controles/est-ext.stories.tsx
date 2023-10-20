import '@/client/features/controles/controles_store.mock'
import { EstExt } from '@/client/features/controles/est-ext'
import type { Story } from '@ladle/react'

export default {
  title: 'features/controles/est_ext/est-ext',
}

export const Default: Story = () => {
  return (
    <>
      <EstExt />
    </>
  )
}
