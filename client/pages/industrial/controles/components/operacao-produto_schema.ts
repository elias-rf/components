import { TColumn } from '@/types/index.js'

export const operacaoProdutoSchema: TColumn[] = [
  {
    name: 'produto',
    label: 'Produto',
  },
  {
    name: 'quantidade',
    label: 'Quantidade',
    align: 'right',
  },
]