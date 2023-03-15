import { TTable } from "../../../../types/model";

export const ComissaoFabricante: TTable = {
  database: "plano",
  table: "ComissaoFabricante",
  fields: [
    {
      field: "CDVendedor",
      label: "CDVendedor",
      name: "CDVendedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CDFornecedor",
      label: "CDFornecedor",
      name: "CDFornecedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisAVista",
      label: "PercComisAVista",
      name: "PercComisAVista",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisAPrazo",
      label: "PercComisAPrazo",
      name: "PercComisAPrazo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
