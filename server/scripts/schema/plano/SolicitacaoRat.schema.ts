import { TTableDef } from "@/types/model";

export const SolicitacaoRat: TTableDef = {
  database: "plano",
  table: "SolicitacaoRat",
  fields: [
    {
      field: "CdSolicitacaoRat",
      label: "CdSolicitacaoRat",
      name: "SolicitacaoRat_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "NumeroRAT",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Mudanca",
      label: "Mudanca",
      name: "Mudanca",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ResumoMudanca",
      label: "ResumoMudanca",
      name: "ResumoMudanca",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "RazoesMudanca",
      label: "RazoesMudanca",
      name: "RazoesMudanca",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PreRequisitos",
      label: "PreRequisitos",
      name: "PreRequisitos",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PontosChecagem",
      label: "PontosChecagem",
      name: "PontosChecagem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdTecnicoDesenv",
      label: "CdTecnicoDesenv",
      name: "CdTecnicoDesenv",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdTecnicoSolicitacao",
      label: "CdTecnicoSolicitacao",
      name: "CdTecnicoSolicitacao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgAguardaAprovConteudo",
      label: "FgAguardaAprovConteudo",
      name: "FgAguardaAprovConteudo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAguardaAprovOrcamento",
      label: "FgAguardaAprovOrcamento",
      name: "FgAguardaAprovOrcamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAprovado",
      label: "FgAprovado",
      name: "FgAprovado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DataEntregaSol",
      label: "DataEntregaSol",
      name: "DataEntregaSol",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HorasPrevistas",
      label: "HorasPrevistas",
      name: "HorasPrevistas",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "HorasRepassadas",
      label: "HorasRepassadas",
      name: "HorasRepassadas",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DetalheMudanca",
      label: "DetalheMudanca",
      name: "DetalheMudanca",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ObservacaoMudanca",
      label: "ObservacaoMudanca",
      name: "ObservacaoMudanca",
      typeField: "string",

      allowNull: false,
    },
  ],
};
