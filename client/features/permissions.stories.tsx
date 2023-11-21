import { Story } from '@ladle/react'
import { Permissions } from './permissions.js'

export default {
  title: 'features/permissions',
}

const permissions = {
  prm1: 'Editar formulário criado por você.',
  prm2: 'Editar formulário criado por todos',
  prm3: 'Excluir formulário',
  prm4: 'Adicionar formulário',
}

export const Form: Story = () => {
  return <Permissions permissions={permissions} />
}
