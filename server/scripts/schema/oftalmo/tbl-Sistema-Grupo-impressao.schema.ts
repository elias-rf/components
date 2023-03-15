import { TTable } from "../../../../types/model";

export const tbl_Sistema_Grupo_impressao: TTable = {
  database: "oftalmo",
  table: "tbl_Sistema_Grupo_impressao",
  fields: [
    {
      field: "Grupo",
      label: "Grupo",
      name: "Grupo",
      typeField: "string",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkObjeto",
      label: "fkObjeto",
      name: "fkObjeto",
      typeField: "string",
      size: 4,
      allowNull: false,
    },
  ],
};
