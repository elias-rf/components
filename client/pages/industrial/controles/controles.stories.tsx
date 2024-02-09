import { authStore } from '@/client/store/auth_store.js'

import type { Meta, StoryObj } from '@storybook/react'
import Controles from './controles.js'

const meta: Meta<typeof Controles> = {
  component: Controles,
}

authStore.state.getState().currentUser.group_ids = '0'

export default meta
type Story = StoryObj<typeof Controles>

export const Default: Story = { render: () => <Controles /> }
