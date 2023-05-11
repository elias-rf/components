import { TTableDef } from "@/types/model";

export const SuporteObsDiaria: TTableDef = {
  database: "plano",
  table: "SuporteObsDiaria",
  fields: [
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtReferencia",
      label: "DtReferencia",
      name: "DtReferencia",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};
