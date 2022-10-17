import { TEntity } from "../../../../types";

export const BloqueioMapa: TEntity = {
  database: "plano",
  table: "BloqueioMapa",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      type: "string",
      size: 128,
      allowNull: false,
    },
    {
      field: "DtBloqueio",
      label: "DtBloqueio",
      name: "DtBloqueio",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
