import { TTable } from "../../../../types";

export const tbl_Seguranca_Permissao: TTable = {
  database: "oftalmo",
  table: "tbl_Seguranca_Permissao",
  fields: [
    {
      field: "kPermissao",
      label: "kPermissao",
      name: "tbl_Seguranca_Permissao_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkGrupo",
      label: "fkGrupo",
      name: "fkGrupo",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Permissao",
      label: "Permissao",
      name: "Permissao",
      type: "int",
      size: 1,
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
