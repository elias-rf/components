import { EstInt } from '@/client/pages/industrial/controles/components/est-int/est-int.js'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EstInt> = {
  component: EstInt,
}

export default meta
type Story = StoryObj<typeof EstInt>

export const Default: Story = {
  render: () => (
    <>
      <EstInt />
    </>
  ),
}
