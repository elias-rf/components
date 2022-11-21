import { TTable } from "../../../../types";

export const ProdutoProducaoEtiquetaExterna: TTable = {
  database: "plano",
  table: "ProdutoProducaoEtiquetaExterna",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoProducaoEtiquetaExterna_id",
      type: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Etiqueta",
      label: "Etiqueta",
      name: "Etiqueta",
      type: "string",
      size: -1,
      allowNull: false,
    },
  ],
};
