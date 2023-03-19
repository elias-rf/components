import { TTableDef } from "../../../../types/model";

export const tSistemaMesVT: TTableDef = {
  database: "oftalmo",
  table: "tSistemaMesVT",
  fields: [
    {
      field: "Dia",
      label: "Dia",
      name: "tSistemaMesVT_id",
      typeField: "date",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MesVT",
      label: "MesVT",
      name: "MesVT",
      typeField: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "Feriado",
      label: "Feriado",
      name: "Feriado",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "ano",
      label: "ano",
      name: "ano",
      typeField: "string",
      size: 4,
    },
    {
      field: "mes",
      label: "mes",
      name: "mes",
      typeField: "string",
      size: 2,
    },
  ],
};
