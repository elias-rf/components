import { TColumn } from '@/types/index.js'
import { format } from 'date-fns'

export const lotesSaidaColumns: TColumn[] = [
  { name: 'NumLote', label: 'Controle', width: '1%', sortable: false },
  { name: 'CdFilial', label: 'Filial', width: '1%', sortable: false },
  {
    name: 'NumNota',
    label: 'Nota Saida',
    width: '1%',
    sortable: false,
  },
  {
    name: 'DtEmissao',
    label: 'Data',
    width: '1%',
    sortable: false,
    format: (dt) => format(dt, 'dd/MM/yyyy'),
  },
  { name: 'CdProduto', label: 'Cod Prod', width: '1%', sortable: false },
  {
    name: 'produto.Descricao',
    label: 'Produto',
    width: '10%',
    sortable: false,
  },
  {
    name: 'nfSaida.CdCliente',
    label: 'Cod Cliente',
    width: '1%',
    sortable: false,
  },
  {
    name: 'nfSaida.Tipo',
    label: 'Tipo',
    width: '1%',
    sortable: false,
  },
  {
    name: 'nfSaida.cliente.RzSocial',
    label: 'Cliente',
    width: '10%',
    sortable: false,
  },
]
