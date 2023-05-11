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

      allowNull: false,
    },
    {
      field: "CdAuxiliar",
      label: "CdAuxiliar",
      name: "CdAuxiliar",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
