import { TTableDef } from "@mono/types/model";

export const EtiquetasLote: TTableDef = {
  database: "plano",
  table: "EtiquetasLote",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdLote",
      label: "CdLote",
      name: "CdLote",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 2,
      allowNull: false,
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
