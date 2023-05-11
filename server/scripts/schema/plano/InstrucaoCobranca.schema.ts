import { TTableDef } from "@/types/model";

export const InstrucaoCobranca: TTableDef = {
  database: "plano",
  table: "InstrucaoCobranca",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdInstrucaoCob",
      label: "CdInstrucaoCob",
      name: "CdInstrucaoCob",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DsInstrucaoCob",
      label: "DsInstrucaoCob",
      name: "DsInstrucaoCob",
      typeField: "string",
    },
  ],
};
