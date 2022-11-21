import { TTable } from "../../../../types";

export const CadProDCB: TTable = {
  database: "plano",
  table: "CadProDCB",
  fields: [
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
