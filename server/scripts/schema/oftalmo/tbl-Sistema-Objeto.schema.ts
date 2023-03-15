import { TTable } from "../../../../types/model";

export const tbl_Sistema_Objeto: TTable = {
  database: "oftalmo",
  table: "tbl_Sistema_Objeto",
  fields: [
    {
      field: "kObjeto",
      label: "kObjeto",
      name: "tbl_Sistema_Objeto_id",
      typeField: "string",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeObjeto",
      label: "NomeObjeto",
      name: "NomeObjeto",
      typeField: "string",
      size: 60,
    },
    {
      field: "DescObjeto",
      label: "DescObjeto",
      name: "DescObjeto",
      typeField: "string",
      size: 50,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "int",
      size: 1,
    },
    {
      field: "Resumo",
      label: "Resumo",
      name: "Resumo",
      typeField: "string",
      size: 6000,
    },
    {
      field: "Permissao",
      label: "Permissao",
      name: "Permissao",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "Ativo",
      label: "Ativo",
      name: "Ativo",
      typeField: "int",
      size: 1,
    },
  ],
};
