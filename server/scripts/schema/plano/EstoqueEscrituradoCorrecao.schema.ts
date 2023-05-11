import { TTableDef } from "@/types/model";

export const EstoqueEscrituradoCorrecao: TTableDef = {
  database: "plano",
  table: "EstoqueEscrituradoCorrecao",
  fields: [
    {
      field: "MesBase",
      label: "MesBase",
      name: "MesBase",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AnoBase",
      label: "AnoBase",
      name: "AnoBase",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtPeriodoCorrecao",
      label: "DtPeriodoCorrecao",
      name: "DtPeriodoCorrecao",
      typeField: "datetime",

      scale: 3,
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
      field: "CdIndEstoque",
      label: "CdIndEstoque",
      name: "CdIndEstoque",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoParticipante",
      label: "TipoParticipante",
      name: "TipoParticipante",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdParticipante",
      label: "CdParticipante",
      name: "CdParticipante",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdePositivo",
      label: "QtdePositivo",
      name: "QtdePositivo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeNegativo",
      label: "QtdeNegativo",
      name: "QtdeNegativo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

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
