import { TEntity } from "../../../../types";

export const tbl_Sistema_Grupo_impressao: TEntity = {
  database: "oftalmo",
  table: "tbl_Sistema_Grupo_impressao",
  fields: [
    {
      field: "Grupo",
      label: "Grupo",
      name: "Grupo",
      type: "string",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkObjeto",
      label: "fkObjeto",
      name: "fkObjeto",
      type: "string",
      size: 4,
      allowNull: false,
    },
  ],
};
