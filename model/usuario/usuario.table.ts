import { TTableDef } from "../../types";

export const usuario: TTableDef = {
  database: "oftalmo",
  table: "tbl_Seguranca_Usuario",
  fields: [
    {
      field: "kUsuario",
      label: "Usuario",
      name: "usuario_id",
      typeField: "int",
      size: 4,
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
      size: 50,
      allowNull: false,
    },
    {
      field: "email",
      label: "Email",
      name: "email",
      typeField: "string",
      size: 50,
    },
    {
      field: "fkFuncionario",
      label: "fkFuncionario",
      name: "empregado_id",
      typeField: "int",
      size: 4,
      visible: false,
    },
    {
      field: "Ativo",
      label: "Ativo",
      name: "is_ativo",
      typeField: "int",
      size: 1,
      defaultValue: "1",
    },
    {
      field: "hash",
      label: "Hash",
      name: "hash",
      typeField: "string",
      size: 255,
      visible: false,
    },
    {
      field: "nome",
      label: "Nome",
      name: "nome",
      typeField: "string",
      size: 200,
    },
    {
      field: "setor",
      label: "setor",
      name: "setor",
      typeField: "string",
      size: 50,
      visible: false,
    },
    {
      field: "nivel",
      label: "nivel",
      name: "nivel",
      typeField: "int",
      size: 4,
      visible: false,
    },
    {
      field: "idGroup",
      label: "Grupo",
      name: "group_id",
      typeField: "string",
      size: 50,
    },
  ],
};
