import { TTableDef } from "@/types/model";

export const CadProDCB: TTableDef = {
  database: "plano",
  table: "CadProDCB",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CDDCB",
      label: "CDDCB",
      name: "CDDCB",
      typeField: "string",
      size: 15,
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
  ],
};
