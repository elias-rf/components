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
    },
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "AgendaCancelamento_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdResponsavel",
      label: "CdResponsavel",
      name: "CdResponsavel",
      typeField: "string",
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "HrCancelamento",
      label: "HrCancelamento",
      name: "HrCancelamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DsMotivoCancelamento",
      label: "DsMotivoCancelamento",
      name: "DsMotivoCancelamento",
      typeField: "string",
    },
  ],
};
