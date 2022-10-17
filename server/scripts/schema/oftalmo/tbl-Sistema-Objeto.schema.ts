import { TEntity } from "../../../../types";

export const tbl_Sistema_Objeto: TEntity = {
  database: "oftalmo",
  table: "tbl_Sistema_Objeto",
  fields: [
    {
      field: "kObjeto",
      label: "kObjeto",
      name: "tbl_Sistema_Objeto_id",
      type: "string",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeObjeto",
      label: "NomeObjeto",
      name: "NomeObjeto",
      type: "string",
      size: 60,
    },
    {
      field: "DescObjeto",
      label: "DescObjeto",
      name: "DescObjeto",
      type: "string",
      size: 50,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      type: "int",
      size: 1,
    },
    {
      field: "Resumo",
      label: "Resumo",
      name: "Resumo",
      type: "string",
      size: 6000,
    },
    {
      field: "Permissao",
      label: "Permissao",
      name: "Permissao",
      type: "int",
      size: 1,
      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "Ativo",
      label: "Ativo",
      name: "Ativo",
      type: "int",
      size: 1,
    },
  ],
};
