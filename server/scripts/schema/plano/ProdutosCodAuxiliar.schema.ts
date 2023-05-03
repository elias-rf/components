import { TTableDef } from "@/types/model";

export const ProdutosCodAuxiliar: TTableDef = {
  database: "plano",
  table: "ProdutosCodAuxiliar",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "CdAuxiliar",
      label: "CdAuxiliar",
      name: "CdAuxiliar",
      typeField: "string",
      size: 18,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
