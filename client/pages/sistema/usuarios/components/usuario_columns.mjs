export const usuarioColumns = [
  {
    label: 'Usuario',
    name: 'id',
    width: '1%',
  },
  {
    label: 'Nome',
    name: 'nome',
  },
  {
    label: 'Login',
    name: 'usuario',
  },
  {
    label: 'Email',
    name: 'email',
  },
  {
    label: 'Grupos',
    name: 'grupos',
  },
  {
    label: 'Ativo',
    name: 'ativo',
    width: '1%',
    format: (v) => (v ? 'S' : 'N'),
    parse: (v) => (v.toUpperCase() === 'S' ? '1' : '0'),
  },
]
