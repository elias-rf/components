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
      size: 15,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "MestreKit",
      label: "MestreKit",
      name: "MestreKit",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "DtFabricacao",
      label: "DtFabricacao",
      name: "DtFabricacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtValidade",
      label: "DtValidade",
      name: "DtValidade",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgImprime",
      label: "FgImprime",
      name: "FgImprime",
      typeField: "string",
      size: 1,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
