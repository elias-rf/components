import { TTable } from "../../../../types/model";

export const AcumuladoresManipulacao: TTable = {
  database: "plano",
  table: "AcumuladoresManipulacao",
  fields: [
    {
      field: "CdAcumuladorParcial",
      label: "CdAcumuladorParcial",
      name: "CdAcumuladorParcial",
      typeField: "float",
      size: 4,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 50,
    },
    {
      field: "Validade",
      label: "Validade",
      name: "Validade",
      typeField: "int",
      size: 4,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",
      size: 3,
    },
    {
      field: "FgQuantidade",
      label: "FgQuantidade",
      name: "FgQuantidade",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgFecharQSP",
      label: "FgFecharQSP",
      name: "FgFecharQSP",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgConversao",
      label: "FgConversao",
      name: "FgConversao",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgSemVolume",
      label: "FgSemVolume",
      name: "FgSemVolume",
      typeField: "string",
      size: 1,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
