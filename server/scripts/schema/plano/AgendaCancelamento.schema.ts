import { TTableDef } from "@/types/model";

export const AgendaCancelamento: TTableDef = {
  database: "plano",
  table: "AgendaCancelamento",
  fields: [
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",
      size: 10,
    },
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "AgendaCancelamento_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdResponsavel",
      label: "CdResponsavel",
      name: "CdResponsavel",
      typeField: "string",
      size: 10,
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
      field: "HrCancelamento",
      label: "HrCancelamento",
      name: "HrCancelamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DsMotivoCancelamento",
      label: "DsMotivoCancelamento",
      name: "DsMotivoCancelamento",
      typeField: "string",
      size: 1024,
    },
  ],
};
