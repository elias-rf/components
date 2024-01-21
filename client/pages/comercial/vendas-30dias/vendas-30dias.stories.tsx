import '@/client/index.css'
import '@/utils/mocks/core.mock.js'

import type { Meta, StoryObj } from '@storybook/react'
import Vendas30dias from './vendas-30dias.js'

const meta: Meta<typeof Vendas30dias> = {
  component: Vendas30dias,
}

export default meta
type Story = StoryObj<typeof Vendas30dias>

export const Default: Story = { render: () => <Vendas30dias /> }
