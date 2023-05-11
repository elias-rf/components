import { TTableDef } from "@/types/model";

export const TabBal: TTableDef = {
  database: "plano",
  table: "TabBal",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Contagem1",
      label: "Contagem1",
      name: "Contagem1",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Contagem2",
      label: "Contagem2",
      name: "Contagem2",
      typeField: "float",

      scale: 4,
    },
    {
      field: "EndPrateleiraAtual",
      label: "EndPrateleiraAtual",
      name: "EndPrateleiraAtual",
      typeField: "string",
    },
    {
      field: "EndPrateleiraNovo",
      label: "EndPrateleiraNovo",
      name: "EndPrateleiraNovo",
      typeField: "string",
    },
    {
      field: "DtContagem",
      label: "DtContagem",
      name: "DtContagem",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "IdReduzido",
      label: "IdReduzido",
      name: "IdReduzido",
      typeField: "int",
    },
    {
      field: "StatusContagem",
      label: "StatusContagem",
      name: "StatusContagem",
      typeField: "int",
    },
    {
      field: "NumBalanco",
      label: "NumBalanco",
      name: "NumBalanco",
      typeField: "int",
    },
  ],
};
