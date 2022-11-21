import { TTable } from "../../../../types";

export const AcumuladoresManipulacao: TTable = {
  database: "plano",
  table: "AcumuladoresManipulacao",
  fields: [
    {
      field: "CdAcumuladorParcial",
      label: "CdAcumuladorParcial",
      name: "CdAcumuladorParcial",
      type: "float",
      size: 4,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 50,
    },
    {
      field: "Validade",
      label: "Validade",
      name: "Validade",
      type: "int",
      size: 4,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      type: "string",
      size: 3,
    },
    {
      field: "FgQuantidade",
      label: "FgQuantidade",
      name: "FgQuantidade",
      type: "string",
      size: 1,
    },
    {
      field: "FgFecharQSP",
      label: "FgFecharQSP",
      name: "FgFecharQSP",
      type: "string",
      size: 1,
    },
    {
      field: "FgConversao",
      label: "FgConversao",
      name: "FgConversao",
      type: "string",
      size: 1,
    },
    {
      field: "FgSemVolume",
      label: "FgSemVolume",
      name: "FgSemVolume",
      type: "string",
      size: 1,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
