import { Permissions } from './permissions.jsx'

const meta = {
  component: Permissions,
}

export default meta

const permissions = {
  PRM1: { key: 'prm1', description: 'Editar formulário criado por você.' },
  PRM2: { key: 'prm2', description: 'Editar formulário criado por todos' },
  PRM3: { key: 'prm3', description: 'Excluir formulário' },
  PRM4: { key: 'prm4', description: 'Adicionar formulário' },
}

export const Form = {
  render: () => {
    return <Permissions permissions={permissions} />
  },
}
