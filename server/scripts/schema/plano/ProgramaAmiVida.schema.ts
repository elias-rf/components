import { TTableDef } from "@/types/model";

export const ProgramaAmiVida: TTableDef = {
  database: "plano",
  table: "ProgramaAmiVida",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Campanha",
      label: "Campanha",
      name: "Campanha",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UnidadesCaixa",
      label: "UnidadesCaixa",
      name: "UnidadesCaixa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtInicioCampanha",
      label: "DtInicioCampanha",
      name: "DtInicioCampanha",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtFinalCampanha",
      label: "DtFinalCampanha",
      name: "DtFinalCampanha",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "FgParticipacao",
      label: "FgParticipacao",
      name: "FgParticipacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
