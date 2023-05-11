import { TTableDef } from "@/types/model";

export const tbl_OP_Botao: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Botao",
  fields: [
    {
      field: "kOPBotao",
      label: "kOPBotao",
      name: "tbl_OP_Botao_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Lote",
      label: "Lote",
      name: "Lote",
      typeField: "string",
    },
    {
      field: "NomeUsuario",
      label: "NomeUsuario",
      name: "NomeUsuario",
      typeField: "string",
    },
    {
      field: "DataEmissao",
      label: "DataEmissao",
      name: "DataEmissao",
      typeField: "date",
    },
    {
      field: "Regulador",
      label: "Regulador",
      name: "Regulador",
      typeField: "string",
    },
    {
      field: "DataRegulagem",
      label: "DataRegulagem",
      name: "DataRegulagem",
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
