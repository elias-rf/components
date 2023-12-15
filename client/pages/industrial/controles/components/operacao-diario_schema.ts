import { TColumn } from '@/types/index.js'

export const operacaoDiarioSchema: TColumn[] = [
  {
    name: 'dia',
    label: 'Dia',
    width: '100px',
  },
  {
    name: 'diaSemana',
    label: 'Dia Semana',
    width: '100px',
  },
  {
    name: 'quantidade',
    label: 'Quantidade',
    align: 'right',
    width: '100px',
  },
]