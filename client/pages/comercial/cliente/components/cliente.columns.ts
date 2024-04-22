import { TColumn } from '@/types/index.js'

export const clienteColumns: TColumn[] = [
  {
    label: 'Código',
    name: 'id',
    align: 'right',
    width: '3%',
  },
  {
    label: 'Nome',
    name: 'razaoSocial',
    width: '25%',
  },
  {
    label: 'Cidade',
    name: 'cidade',
    width: '10%',
  },
  {
    label: 'UF',
    name: 'uf',
    width: '3%',
  },
  {
    label: 'CNPJ',
    name: 'cnpj',
    width: '8%',
  },
  {
    label: 'Cód Vendedor',
    name: 'vendedorId',
    width: '5%',
  },
  {
    label: 'Habilitado',
    name: 'ativo',
    width: '5%',
  },
  {
    label: 'Data de Cadastro',
    name: 'cadastroData',
    width: '5%',
  },
]
