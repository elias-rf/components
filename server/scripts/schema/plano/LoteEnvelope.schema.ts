import { TTableDef } from "../../../../types/model";

export const LoteEnvelope: TTableDef = {
  database: "plano",
  table: "LoteEnvelope",
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
      field: "NumInicial",
      label: "NumInicial",
      name: "NumInicial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumFinal",
      label: "NumFinal",
      name: "NumFinal",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtRemessa",
      label: "DtRemessa",
      name: "DtRemessa",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
