import { TColumn } from '@/types'
import { day } from '@/utils/date/day'

export const lotesSaidaColumns: TColumn[] = [
  { name: 'NumLote', label: 'Controle', width: '1%' },
  { name: 'CdFilial', label: 'Filial', width: '1%' },
  {
    name: 'NumNota',
    label: 'Nota Saida',
    width: '1%',
  },
  {
    name: 'DtEmissao',
    label: 'Data',
    width: '1%',
    format: (dt) => day(dt).format('DD/MM/YYYY'),
  },
  { name: 'CdProduto', label: 'Cod Prod', width: '1%' },
  { name: 'produto.Descricao', label: 'Produto', width: '10%' },
  { name: 'nfSaida.cliente.RzSocial', label: 'Cliente', width: '10%' },
]
