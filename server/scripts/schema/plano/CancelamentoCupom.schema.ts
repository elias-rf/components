import { TEntity } from "../../../../types";

export const CancelamentoCupom: TEntity = {
  database: "plano",
  table: "CancelamentoCupom",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      type: "string",
      size: 10,
    },
    {
      field: "Gerente",
      label: "Gerente",
      name: "Gerente",
      type: "string",
      size: 10,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      type: "string",
      size: 80,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdMotivoCancelamento",
      label: "CdMotivoCancelamento",
      name: "CdMotivoCancelamento",
      type: "float",
      size: 8,
      scale: 4,
    },
  ],
};
