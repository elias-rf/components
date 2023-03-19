import { TTableDef } from "../../../../types/model";

export const EstoqueDiario: TTableDef = {
  database: "plano",
  table: "EstoqueDiario",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "QtdeEstoque",
      label: "QtdeEstoque",
      name: "QtdeEstoque",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
