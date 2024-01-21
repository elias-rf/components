import { JsonView } from '@/client/components/json-view/json-view.js'
import { clienteStore } from '@/client/pages/comercial/cliente/cliente.store.js'
import '@/utils/mocks/core.mock.js'
import type { Meta, StoryObj } from '@storybook/react'
import Cliente from './cliente.js'

const meta: Meta<typeof Cliente> = {
  component: Cliente,
}

export default meta
type Story = StoryObj<typeof Cliente>

clienteStore.fetchList()

export const Default: Story = {
  render: () => (
    <>
      <Cliente /> <JsonView data={clienteStore.state} />
    </>
  ),
}
