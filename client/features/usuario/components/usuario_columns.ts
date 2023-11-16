import { TColumn } from '@/types'

export const usuarioColumns: TColumn[] = [
  {
    label: 'Usuario',
    name: 'kUsuario',
    width: '1%',
  },
  {
    label: 'Nome',
    name: 'nome',
  },
  {
    label: 'Login',
    name: 'NomeUsuario',
  },
  {
    label: 'Email',
    name: 'email',
  },
  {
    label: 'Grupos',
    name: 'setor',
  },
  {
    label: 'Ativo',
    name: 'Ativo',
    width: '1%',
    format: (v) => (v ? 'S' : 'N'),
    parse: (v) => (v.toUpperCase() === 'S' ? '1' : '0'),
  },
]
