import { TTable } from "../../../../types/model";

export const SuporteObsDiaria: TTable = {
  database: "plano",
  table: "SuporteObsDiaria",
  fields: [
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtReferencia",
      label: "DtReferencia",
      name: "DtReferencia",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 3072,
      allowNull: false,
    },
  ],
};
