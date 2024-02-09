import { JsonView } from '@/client/components/json-view/json-view.js'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { authStore } from '@/client/store/auth_store.js'
import type { Meta, StoryObj } from '@storybook/react'
import Cliente from './cliente.js'

const meta: Meta<typeof Cliente> = {
  component: Cliente,
}

export default meta
type Story = StoryObj<typeof Cliente>

authStore.state.getState().currentUser.group_ids = '0'

export const Default: Story = {
  render: () => {
    const state = clienteStore.state((state) => state)
    return (
      <>
        <Cliente />
        <JsonView data={state} />
      </>
    )
  },
}
