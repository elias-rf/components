import { TEntity } from "../../../../types";

export const tbl_Seguranca_UsuarioGrupo: TEntity = {
  database: "oftalmo",
  table: "tbl_Seguranca_UsuarioGrupo",
  schema: [
    {
      field: "fkNomeUsuario",
      label: "fkNomeUsuario",
      name: "fkNomeUsuario",
      type: "string",
      size: 50,
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
  ],
};
