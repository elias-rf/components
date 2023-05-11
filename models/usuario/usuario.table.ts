import { TTableDef } from "@/types";

export const usuario: TTableDef = {
  database: "oftalmo",
  table: "tbl_Seguranca_Usuario",
  fields: [
    {
      field: "kUsuario",
      label: "Usuario",
      name: "usuario_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      readOnly: true,
    },
    {
      field: "NomeUsuario",
      label: "Login",
      name: "nome_login",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "email",
      label: "Email",
      name: "email",
      typeField: "string",
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "empregado_id",
      typeField: "int",
    },
    {
      field: "Ativo",
      label: "Ativo",
      name: "is_ativo",
      typeField: "int",

      defaultValue: "1",
    },
    {
      field: "hash",
      label: "Hash",
      name: "hash",
      typeField: "string",
    },
    {
      field: "nome",
      label: "Nome",
      name: "nome",
      typeField: "string",
    },
    {
      field: "setor",
      label: "setor",
      name: "setor",
      typeField: "string",
    },
    {
      field: "nivel",
      label: "nivel",
      name: "nivel",
      typeField: "int",
    },
    {
      field: "idGroup",
      label: "Grupo",
      name: "group_id",
      typeField: "string",
    },
  ],
};
