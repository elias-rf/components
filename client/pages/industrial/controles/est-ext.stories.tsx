import '@/client/pages/industrial/controles/controles_store.mock.js'
import { EstExt } from '@/client/pages/industrial/controles/est-ext.js'
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
