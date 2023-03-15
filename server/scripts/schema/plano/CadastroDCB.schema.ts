import { TTable } from "../../../../types/model";

export const CadastroDCB: TTable = {
  database: "plano",
  table: "CadastroDCB",
  fields: [
    {
      field: "CdDCB",
      label: "CdDCB",
      name: "CadastroDCB_id",
      typeField: "string",
      size: 16,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoDCB",
      label: "DescricaoDCB",
      name: "DescricaoDCB",
      typeField: "string",
      size: 40,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 1024,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
