import { TEntity } from "../../../../types";

export const CadProDCB: TEntity = {
  database: "plano",
  table: "CadProDCB",
  schema: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CDDCB",
      label: "CDDCB",
      name: "CDDCB",
      type: "string",
      size: 15,
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