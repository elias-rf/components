import { TColumn } from '@/types/index.js'

export const esterilizacaoInternaDiarioSchema: TColumn[] = [
  {
    name: 'dia',
    label: 'Dia',
  },
  {
    name: 'dia_semana',
    label: 'Dia Semana',
  },
  {
    name: 'quantidade',
    label: 'Quantidade',
    align: 'right',
  },
]
