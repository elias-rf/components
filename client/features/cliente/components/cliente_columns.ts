import { TColumn } from '@/types/index.js'

export const clienteColumns: TColumn[] = [
  {
    label: 'Código',
    name: 'CdCliente',
    align: 'right',
    width: '3%',
  },
  {
    label: 'Nome',
    name: 'RzSocial',
    width: '25%',
  },
  {
    label: 'Cidade',
    name: 'Cidade',
    width: '10%',
  },
  {
    label: 'UF',
    name: 'Uf',
    width: '3%',
  },
  {
    label: 'CNPJ',
    name: 'CGC',
    width: '8%',
  },
  {
    label: 'Cód Vendedor',
    name: 'CdVendedor',
    width: '5%',
  },
  {
    label: 'Habilitado',
    name: 'FgAtivo',
    width: '5%',
  },
  {
    label: 'Email',
    name: 'EMail',
    width: '10%',
  },
  {
    label: 'Data de Cadastro',
    name: 'DtCadastro',
    width: '5%',
  },
]
