import { TEntity } from "../../../../types";

export const CadCliAssistencia: TEntity = {
  database: "plano",
  table: "CadCliAssistencia",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliAssistencia_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgBancoHoras",
      label: "FgBancoHoras",
      name: "FgBancoHoras",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "TempoResposta",
      label: "TempoResposta",
      name: "TempoResposta",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TempoSolucao",
      label: "TempoSolucao",
      name: "TempoSolucao",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TempoDeslocamento",
      label: "TempoDeslocamento",
      name: "TempoDeslocamento",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlHoraAvulsa",
      label: "VlHoraAvulsa",
      name: "VlHoraAvulsa",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
