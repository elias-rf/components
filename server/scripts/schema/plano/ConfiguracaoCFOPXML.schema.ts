import { TTableDef } from "@/types/model";

export const ConfiguracaoCFOPXML: TTableDef = {
  database: "plano",
  table: "ConfiguracaoCFOPXML",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CFOPOrigem",
      label: "CFOPOrigem",
      name: "CFOPOrigem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CFOPDestino",
      label: "CFOPDestino",
      name: "CFOPDestino",
      typeField: "int",

      allowNull: false,
    },
  ],
};
