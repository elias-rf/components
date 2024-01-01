import type { Meta, StoryObj } from '@storybook/react'
import { Transferencia } from './transferencia_form.js'

const meta: Meta<typeof Transferencia> = {
  component: Transferencia,
}

export default meta
type Story = StoryObj<typeof Transferencia>

export const Default: Story = {
  render: () => {
    return <Transferencia />
  },
}
