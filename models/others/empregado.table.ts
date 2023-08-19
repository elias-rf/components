import { TTableDef } from "@/types";

export const empregado: TTableDef = {
  database: "oftalmo",
  table: "tbl_Funcionario",
  fields: [
    {
      field: "kFuncionario",
      label: "kFuncionario",
      name: "empregado_id",
      typeField: "int",
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FKEmpresa",
      label: "FKEmpresa",
      name: "empresa_id",
      typeField: "int",
    },
    {
      field: "NomeFuncionario",
      label: "NomeFuncionario",
      name: "nome",
      typeField: "string",
    },
    {
      field: "IDN",
      label: "IDN",
      name: "identidade",
      typeField: "string",
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "funcao",
      typeField: "string",
    },
    {
      field: "Afastado",
      label: "Afastado",
      name: "afastado",
      typeField: "int",
      allowNull: false,
    },
    {
      field: "Setor",
      label: "Setor",
      name: "setor",
      typeField: "string",
    },
  ],
};
