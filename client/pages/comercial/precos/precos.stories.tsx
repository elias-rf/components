import type { Meta, StoryObj } from '@storybook/react'
import Precos from './precos.js'

const meta: Meta<typeof Precos> = {
  component: Precos,
}

export default meta
type Story = StoryObj<typeof Precos>

export const Default: Story = { render: () => <Precos /> }
