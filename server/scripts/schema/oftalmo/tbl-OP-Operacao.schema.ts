import { TTable } from "../../../../types";

export const tbl_OP_Operacao: TTable = {
  database: "oftalmo",
  table: "tbl_OP_Operacao",
  fields: [
    {
      field: "kOperacao",
      label: "kOperacao",
      name: "kOperacao",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "Grupo",
      label: "Grupo",
      name: "Grupo",
      type: "int",
      size: 1,
      allowNull: false,
    },
    {
      field: "Ordem",
      label: "Ordem",
      name: "Ordem",
      type: "int",
      size: 1,
      allowNull: false,
    },
    {
      field: "ehRetrabalho",
      label: "ehRetrabalho",
      name: "ehRetrabalho",
      type: "int",
      size: 1,
      allowNull: false,
    },
  ],
};
