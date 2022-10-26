import { TEntity } from "../../../../types";

export const ComissaoFabricante: TEntity = {
  database: "plano",
  table: "ComissaoFabricante",
  schema: [
    {
      field: "CDVendedor",
      label: "CDVendedor",
      name: "CDVendedor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CDFornecedor",
      label: "CDFornecedor",
      name: "CDFornecedor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisAVista",
      label: "PercComisAVista",
      name: "PercComisAVista",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PercComisAPrazo",
      label: "PercComisAPrazo",
      name: "PercComisAPrazo",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
