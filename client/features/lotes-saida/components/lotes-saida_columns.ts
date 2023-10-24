import { TColumn } from '@/types'
import { day } from '@/utils/date/day'

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
    format: (dt) => day(dt).format('DD/MM/YYYY'),
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
    name: 'nfSaida.cliente.RzSocial',
    label: 'Cliente',
    width: '10%',
    sortable: false,
  },
]
