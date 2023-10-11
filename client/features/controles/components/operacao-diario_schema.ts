import { TColumn } from '@/types'

export const operacaoDiarioSchema: TColumn[] = [
  {
    name: 'dia',
    label: 'Dia',
  },
  {
    name: 'diaSemana',
    label: 'Dia Semana',
  },
  {
    name: 'quantidade',
    label: 'Quantidade',
    align: 'right',
  },
]
