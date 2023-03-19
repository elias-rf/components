import { TTableDef } from "../../../../types/model";

export const SuporteHorarios: TTableDef = {
  database: "plano",
  table: "SuporteHorarios",
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
      field: "DataHoraReferencia",
      label: "DataHoraReferencia",
      name: "DataHoraReferencia",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};
