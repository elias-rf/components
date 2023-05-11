import { TTableDef } from "@/types/model";

export const ComissaoFabricante: TTableDef = {
  database: "plano",
  table: "ComissaoFabricante",
  fields: [
    {
      field: "CDVendedor",
      label: "CDVendedor",
      name: "CDVendedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CDFornecedor",
      label: "CDFornecedor",
      name: "CDFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisAVista",
      label: "PercComisAVista",
      name: "PercComisAVista",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisAPrazo",
      label: "PercComisAPrazo",
      name: "PercComisAPrazo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
