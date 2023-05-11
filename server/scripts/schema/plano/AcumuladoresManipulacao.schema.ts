import { TTableDef } from "@/types/model";

export const AcumuladoresManipulacao: TTableDef = {
  database: "plano",
  table: "AcumuladoresManipulacao",
  fields: [
    {
      field: "CdAcumuladorParcial",
      label: "CdAcumuladorParcial",
      name: "CdAcumuladorParcial",
      typeField: "float",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "Validade",
      label: "Validade",
      name: "Validade",
      typeField: "int",
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",
    },
    {
      field: "FgQuantidade",
      label: "FgQuantidade",
      name: "FgQuantidade",
      typeField: "string",
    },
    {
      field: "FgFecharQSP",
      label: "FgFecharQSP",
      name: "FgFecharQSP",
      typeField: "string",
    },
    {
      field: "FgConversao",
      label: "FgConversao",
      name: "FgConversao",
      typeField: "string",
    },
    {
      field: "FgSemVolume",
      label: "FgSemVolume",
      name: "FgSemVolume",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
  ],
};
