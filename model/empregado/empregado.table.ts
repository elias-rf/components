import { TTable } from "../../types";

export const empregado: TTable = {
  database: "oftalmo",
  table: "tbl_Funcionario",
  fields: [
    {
      field: "kFuncionario",
      label: "kFuncionario",
      name: "empregado_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FKEmpresa",
      label: "FKEmpresa",
      name: "empresa_id",
      type: "int",
      size: 4,
    },
    {
      field: "NomeFuncionario",
      label: "NomeFuncionario",
      name: "nome",
      type: "string",
      size: 150,
    },
    {
      field: "IDN",
      label: "IDN",
      name: "identidade",
      type: "string",
      size: 20,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "funcao",
      type: "string",
      size: 50,
    },
    {
      field: "Afastado",
      label: "Afastado",
      name: "afastado",
      type: "int",
      size: 1,
      allowNull: false,
    },
    {
      field: "Setor",
      label: "Setor",
      name: "setor",
      type: "string",
      size: 30,
    },
  ],
};
