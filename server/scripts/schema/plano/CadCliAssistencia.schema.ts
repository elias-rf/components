import { TTableDef } from "../../../../types/model";

export const CadCliAssistencia: TTableDef = {
  database: "plano",
  table: "CadCliAssistencia",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliAssistencia_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgBancoHoras",
      label: "FgBancoHoras",
      name: "FgBancoHoras",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "TempoResposta",
      label: "TempoResposta",
      name: "TempoResposta",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TempoSolucao",
      label: "TempoSolucao",
      name: "TempoSolucao",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TempoDeslocamento",
      label: "TempoDeslocamento",
      name: "TempoDeslocamento",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlHoraAvulsa",
      label: "VlHoraAvulsa",
      name: "VlHoraAvulsa",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
