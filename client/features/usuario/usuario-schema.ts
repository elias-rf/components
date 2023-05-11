export const usuarioSchema = [
  {
    label: "Usuario",
    name: "usuario_id",
    typeField: "int",

    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    readOnly: true,
  },
  {
    label: "Login",
    name: "nome_login",
    typeField: "string",

    allowNull: false,
  },
  {
    label: "Email",
    name: "email",
    typeField: "string",
  },
  {
    label: "fkFuncionario",
    name: "empregado_id",
    typeField: "int",

    visible: false,
  },
  {
    label: "Ativo",
    name: "is_ativo",
    typeField: "int",

    defaultValue: "1",
  },
  {
    label: "Hash",
    name: "hash",
    typeField: "string",

    visible: false,
  },
  {
    label: "Nome",
    name: "nome",
    typeField: "string",
  },
  {
    label: "setor",
    name: "setor",
    typeField: "string",

    visible: false,
  },
  {
    label: "nivel",
    name: "nivel",
    typeField: "int",

    visible: false,
  },
  {
    label: "Grupo",
    name: "group_id",
    typeField: "string",
  },
];
