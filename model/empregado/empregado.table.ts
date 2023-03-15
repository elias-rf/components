import { TTable } from "../../types";

export const empregado: TTable = {
  database: "oftalmo",
  table: "tbl_Funcionario",
  fields: [
    {
      field: "kFuncionario",
      label: "kFuncionario",
      name: "empregado_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FKEmpresa",
      label: "FKEmpresa",
      name: "empresa_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "NomeFuncionario",
      label: "NomeFuncionario",
      name: "nome",
      typeField: "string",
      size: 150,
    },
    {
      field: "IDN",
      label: "IDN",
      name: "identidade",
      typeField: "string",
      size: 20,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "funcao",
      typeField: "string",
      size: 50,
    },
    {
      field: "Afastado",
      label: "Afastado",
      name: "afastado",
      typeField: "int",
      size: 1,
      allowNull: false,
    },
    {
      field: "Setor",
      label: "Setor",
      name: "setor",
      typeField: "string",
      size: 30,
    },
  ],
};
