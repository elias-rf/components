import { TTable } from "../../../../types";

export const CadProBula: TTable = {
  database: "plano",
  table: "CadProBula",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadProBula_id",
      type: "string",
      size: 15,
      primaryKey: true,
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
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      type: "string",
      size: 5120,
    },
  ],
};
