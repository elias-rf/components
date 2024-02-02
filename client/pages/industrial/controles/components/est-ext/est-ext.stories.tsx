import { EstExt } from '@/client/pages/industrial/controles/components/est-ext/est-ext.js'

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
