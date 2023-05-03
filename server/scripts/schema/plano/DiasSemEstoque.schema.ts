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
      size: 2,
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
      field: "DtInicioFalta",
      label: "DtInicioFalta",
      name: "DtInicioFalta",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DtReposicao",
      label: "DtReposicao",
      name: "DtReposicao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
