import { TTableDef } from "@/types/model";

export const tbl_Seguranca_Permissao: TTableDef = {
  database: "oftalmo",
  table: "tbl_Seguranca_Permissao",
  fields: [
    {
      field: "kPermissao",
      label: "kPermissao",
      name: "tbl_Seguranca_Permissao_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkGrupo",
      label: "fkGrupo",
      name: "fkGrupo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Permissao",
      label: "Permissao",
      name: "Permissao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkObjeto",
      label: "fkObjeto",
      name: "fkObjeto",
      typeField: "string",

      allowNull: false,
    },
  ],
};
