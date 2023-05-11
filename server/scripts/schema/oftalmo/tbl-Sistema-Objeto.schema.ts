import { TTableDef } from "@/types/model";

export const tbl_Sistema_Objeto: TTableDef = {
  database: "oftalmo",
  table: "tbl_Sistema_Objeto",
  fields: [
    {
      field: "kObjeto",
      label: "kObjeto",
      name: "tbl_Sistema_Objeto_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeObjeto",
      label: "NomeObjeto",
      name: "NomeObjeto",
      typeField: "string",
    },
    {
      field: "DescObjeto",
      label: "DescObjeto",
      name: "DescObjeto",
      typeField: "string",
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "int",
    },
    {
      field: "Resumo",
      label: "Resumo",
      name: "Resumo",
      typeField: "string",
    },
    {
      field: "Permissao",
      label: "Permissao",
      name: "Permissao",
      typeField: "int",

      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "Ativo",
      label: "Ativo",
      name: "Ativo",
      typeField: "int",
    },
  ],
};
