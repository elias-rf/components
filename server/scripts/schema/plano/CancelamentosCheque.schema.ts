import { TTableDef } from "../../../../types/model";

export const CancelamentosCheque: TTableDef = {
  database: "plano",
  table: "CancelamentosCheque",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
      size: 12,
      allowNull: false,
    },
    {
      field: "NumCheque",
      label: "NumCheque",
      name: "NumCheque",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
      size: 1024,
    },
  ],
};
