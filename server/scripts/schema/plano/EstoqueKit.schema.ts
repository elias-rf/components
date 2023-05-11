import { TTableDef } from "@/types/model";

export const EstoqueKit: TTableDef = {
  database: "plano",
  table: "EstoqueKit",
  fields: [
    {
      field: "NumProducao",
      label: "NumProducao",
      name: "NumProducao",
      typeField: "string",
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MestreKit",
      label: "MestreKit",
      name: "MestreKit",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtFabricacao",
      label: "DtFabricacao",
      name: "DtFabricacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtValidade",
      label: "DtValidade",
      name: "DtValidade",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgImprime",
      label: "FgImprime",
      name: "FgImprime",
      typeField: "string",
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
