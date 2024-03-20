export const usuarioSchema = {
  table: 'tbl_Seguranca_Usuario',
  primary: ['kUsuario'] as const,
  fields: [
    'kUsuario', // id
    'nome', // nome sobrenome
    'email', // email de contato
    'setor', // grupos de acesso
    // 'fkFuncionario', // id funcional
    'NomeUsuario', // login
    'hash', // password
    'Ativo', // enabled
    // 'Senha',
    // 'fkGrupo',
    // 'nivel',
    'idGroup',
  ] as const,
}
