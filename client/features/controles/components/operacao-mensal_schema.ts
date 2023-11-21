import { TColumn } from '@/types/index.js'

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
