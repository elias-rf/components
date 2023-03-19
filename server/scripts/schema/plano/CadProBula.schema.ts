import { TTableDef } from "../../../../types/model";

export const CadProBula: TTableDef = {
  database: "plano",
  table: "CadProBula",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadProBula_id",
      typeField: "string",
      size: 15,
      primaryKey: true,
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
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
      size: 5120,
    },
  ],
};
