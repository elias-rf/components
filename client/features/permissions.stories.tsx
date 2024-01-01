import type { Meta, StoryObj } from '@storybook/react'
import { Permissions } from './permissions.js'

const meta: Meta<typeof Permissions> = {
  component: Permissions,
}

export default meta
type Story = StoryObj<typeof Permissions>

const permissions = {
  prm1: 'Editar formulário criado por você.',
  prm2: 'Editar formulário criado por todos',
  prm3: 'Excluir formulário',
  prm4: 'Adicionar formulário',
}

export const Form: Story = {
  render: () => {
    return <Permissions permissions={permissions} />
  },
}
