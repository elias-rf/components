import { TEntity } from "../../../../types";

export const AgendaCancelamento: TEntity = {
  database: "plano",
  table: "AgendaCancelamento",
  fields: [
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      type: "string",
      size: 10,
    },
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "AgendaCancelamento_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdResponsavel",
      label: "CdResponsavel",
      name: "CdResponsavel",
      type: "string",
      size: 10,
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
      field: "HrCancelamento",
      label: "HrCancelamento",
      name: "HrCancelamento",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DsMotivoCancelamento",
      label: "DsMotivoCancelamento",
      name: "DsMotivoCancelamento",
      type: "string",
      size: 1024,
    },
  ],
};
