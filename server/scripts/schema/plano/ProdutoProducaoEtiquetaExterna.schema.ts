import { TTableDef } from "@/types/model";

export const ProdutoProducaoEtiquetaExterna: TTableDef = {
  database: "plano",
  table: "ProdutoProducaoEtiquetaExterna",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoProducaoEtiquetaExterna_id",
      typeField: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Etiqueta",
      label: "Etiqueta",
      name: "Etiqueta",
      typeField: "string",
      size: -1,
      allowNull: false,
    },
  ],
};
