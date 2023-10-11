import { TColumn } from '@/types'

export const operacaoMensalSchema: TColumn[] = [
  {
    name: 'mes',
    label: 'Mês',
  },
  {
    name: 'quantidade',
    label: 'Quantidade',
    align: 'right',
  },
]
