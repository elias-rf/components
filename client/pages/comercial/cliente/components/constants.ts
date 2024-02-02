import { TPermissions } from '@/types/index.js'

export const permissions: TPermissions = {
  PERMISSAO: {
    key: 'comercial_cliente_permissao',
    description: 'Atribuir permissões do cliente',
  },
  READ: {
    key: 'comercial_cliente_read_all',
    description: 'Visualizar dados de todos os clientes',
  },
  READ_MY: {
    key: 'comercial_cliente_read_my',
    description: 'Visualizar dados dos próprios clientes',
  },
}
