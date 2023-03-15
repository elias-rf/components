import { TTable } from "../../../../types/model";

export const InstrucaoCobranca: TTable = {
  database: "plano",
  table: "InstrucaoCobranca",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdInstrucaoCob",
      label: "CdInstrucaoCob",
      name: "CdInstrucaoCob",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DsInstrucaoCob",
      label: "DsInstrucaoCob",
      name: "DsInstrucaoCob",
      typeField: "string",
      size: 45,
    },
  ],
};
