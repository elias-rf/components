import { authStore } from '@/client/store/auth_store.js'
import type { Meta, StoryObj } from '@storybook/react'
import Precos from './precos.js'

const meta: Meta<typeof Precos> = {
  component: Precos,
}

authStore.state.getState().currentUser.group_ids = '0'

export default meta
type Story = StoryObj<typeof Precos>

export const Default: Story = { render: () => <Precos /> }
