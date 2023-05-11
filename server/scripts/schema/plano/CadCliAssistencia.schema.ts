import { TTableDef } from "@/types/model";

export const CadCliAssistencia: TTableDef = {
  database: "plano",
  table: "CadCliAssistencia",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliAssistencia_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgBancoHoras",
      label: "FgBancoHoras",
      name: "FgBancoHoras",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TempoResposta",
      label: "TempoResposta",
      name: "TempoResposta",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TempoSolucao",
      label: "TempoSolucao",
      name: "TempoSolucao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TempoDeslocamento",
      label: "TempoDeslocamento",
      name: "TempoDeslocamento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlHoraAvulsa",
      label: "VlHoraAvulsa",
      name: "VlHoraAvulsa",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
