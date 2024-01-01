import '@/client/pages/industrial/controles/controles_store.mock.js'
import { EstExt } from '@/client/pages/industrial/controles/est-ext.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EstExt> = {
  component: EstExt,
}

export default meta
type Story = StoryObj<typeof EstExt>

export const Default: Story = {
  render: () => (
    <>
      <EstExt />
    </>
  ),
}
