import { TTableDef } from "../../../../types/model";

export const tbl_Seguranca_UsuarioGrupo: TTableDef = {
  database: "oftalmo",
  table: "tbl_Seguranca_UsuarioGrupo",
  fields: [
    {
      field: "fkNomeUsuario",
      label: "fkNomeUsuario",
      name: "fkNomeUsuario",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "fkGrupo",
      label: "fkGrupo",
      name: "fkGrupo",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
