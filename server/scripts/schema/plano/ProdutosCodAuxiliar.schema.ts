import { TEntity } from "../../../../types";

export const ProdutosCodAuxiliar: TEntity = {
  database: "plano",
  table: "ProdutosCodAuxiliar",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "CdAuxiliar",
      label: "CdAuxiliar",
      name: "CdAuxiliar",
      type: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
