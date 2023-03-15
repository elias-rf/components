import { TTable } from "../../../../types/model";

export const CadProObsNota: TTable = {
  database: "plano",
  table: "CadProObsNota",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadProObsNota_id",
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
      field: "ObsComplementar",
      label: "ObsComplementar",
      name: "ObsComplementar",
      typeField: "string",
      size: 1024,
    },
  ],
};
