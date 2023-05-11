import { TTableDef } from "@/types/model";

export const BloqueioMapa: TTableDef = {
  database: "plano",
  table: "BloqueioMapa",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtBloqueio",
      label: "DtBloqueio",
      name: "DtBloqueio",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
