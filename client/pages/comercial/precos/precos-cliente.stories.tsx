import { PrecosCliente } from '@/client/pages/comercial/precos/precos-cliente.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PrecosCliente> = {
  component: PrecosCliente,
}

export default meta
type Story = StoryObj<typeof PrecosCliente>

export const Default: Story = { render: () => <PrecosCliente /> }
