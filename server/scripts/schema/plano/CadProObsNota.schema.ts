import { TTable } from "../../../../types";

export const CadProObsNota: TTable = {
  database: "plano",
  table: "CadProObsNota",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadProObsNota_id",
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
      field: "ObsComplementar",
      label: "ObsComplementar",
      name: "ObsComplementar",
      type: "string",
      size: 1024,
    },
  ],
};
