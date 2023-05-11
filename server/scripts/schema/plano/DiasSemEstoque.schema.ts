import { TTableDef } from "@/types/model";

export const DiasSemEstoque: TTableDef = {
  database: "plano",
  table: "DiasSemEstoque",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtInicioFalta",
      label: "DtInicioFalta",
      name: "DtInicioFalta",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtReposicao",
      label: "DtReposicao",
      name: "DtReposicao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
