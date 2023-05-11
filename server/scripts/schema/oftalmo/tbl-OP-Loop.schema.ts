import { TTableDef } from "@/types/model";

export const tbl_OP_Loop: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Loop",
  fields: [
    {
      field: "kOpLoop",
      label: "kOpLoop",
      name: "tbl_OP_Loop_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "QtdFilamentos",
      label: "QtdFilamentos",
      name: "QtdFilamentos",
      typeField: "int",

      defaultValue: "50",
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "float",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
    },
    {
      field: "Tamanho",
      label: "Tamanho",
      name: "Tamanho",
      typeField: "float",
    },
    {
      field: "Lote",
      label: "Lote",
      name: "Lote",
      typeField: "string",
    },
    {
      field: "DataEmissao",
      label: "DataEmissao",
      name: "DataEmissao",
      typeField: "date",
    },
    {
      field: "Travado",
      label: "Travado",
      name: "Travado",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "IdAuxiliar",
      label: "IdAuxiliar",
      name: "IdAuxiliar",
      typeField: "int",

      autoIncrement: true,
      allowNull: false,
    },
  ],
};
