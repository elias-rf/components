import type { Meta, StoryObj } from '@storybook/react'
import { TransferenciaForm } from './components/transferencia_form.js'

const meta: Meta<typeof TransferenciaForm> = {
  component: TransferenciaForm,
}

export default meta
type Story = StoryObj<typeof TransferenciaForm>

export const Default: Story = {
  render: () => {
    return <TransferenciaForm />
  },
}
