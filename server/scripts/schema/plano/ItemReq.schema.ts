import { TTableDef } from "../../../../types/model";

export const ItemReq: TTableDef = {
  database: "plano",
  table: "ItemReq",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumRequisicao",
      label: "NumRequisicao",
      name: "NumRequisicao",
      typeField: "int",
      size: 4,
      allowNull: false,
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
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",
      size: 1,
    },
  ],
};
