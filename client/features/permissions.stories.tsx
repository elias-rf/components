import type { Meta, StoryObj } from '@storybook/react'
import { Permissions } from './permissions.js'

const meta: Meta<typeof Permissions> = {
  component: Permissions,
}

export default meta
type Story = StoryObj<typeof Permissions>

const permissions = {
  PRM1: { key: 'prm1', description: 'Editar formulário criado por você.' },
  PRM2: { key: 'prm2', description: 'Editar formulário criado por todos' },
  PRM3: { key: 'prm3', description: 'Excluir formulário' },
  PRM4: { key: 'prm4', description: 'Adicionar formulário' },
}

export const Form: Story = {
  render: () => {
    return <Permissions permissions={permissions} />
  },
}
