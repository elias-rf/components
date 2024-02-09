import { authStore } from '@/client/store/auth_store.js'
import type { Meta, StoryObj } from '@storybook/react'
import Vendas30dias from './vendas-30dias.js'

const meta: Meta<typeof Vendas30dias> = {
  component: Vendas30dias,
}

export default meta
type Story = StoryObj<typeof Vendas30dias>

authStore.state.getState().currentUser.group_ids = '0'

export const Default: Story = { render: () => <Vendas30dias /> }
