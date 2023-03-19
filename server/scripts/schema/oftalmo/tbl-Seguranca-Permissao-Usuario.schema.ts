import { TTableDef } from "../../../../types/model";

export const tbl_Seguranca_Permissao_Usuario: TTableDef = {
  database: "oftalmo",
  table: "tbl_Seguranca_Permissao_Usuario",
  fields: [
    {
      field: "kPermissao",
      label: "kPermissao",
      name: "kPermissao",
      typeField: "int",
      size: 4,
      autoIncrement: true,
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
    {
      field: "fkUsuario",
      label: "fkUsuario",
      name: "fkUsuario",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Permissao",
      label: "Permissao",
      name: "Permissao",
      typeField: "int",
      size: 1,
      allowNull: false,
    },
    {
      field: "actions",
      label: "actions",
      name: "actions",
      typeField: "string",
      size: 200,
    },
  ],
};
