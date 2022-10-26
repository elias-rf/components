import { TEntity } from "../../../../types";

export const EstoqueEscrituradoCorrecao: TEntity = {
  database: "plano",
  table: "EstoqueEscrituradoCorrecao",
  schema: [
    {
      field: "MesBase",
      label: "MesBase",
      name: "MesBase",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "AnoBase",
      label: "AnoBase",
      name: "AnoBase",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtPeriodoCorrecao",
      label: "DtPeriodoCorrecao",
      name: "DtPeriodoCorrecao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdIndEstoque",
      label: "CdIndEstoque",
      name: "CdIndEstoque",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "TipoParticipante",
      label: "TipoParticipante",
      name: "TipoParticipante",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "CdParticipante",
      label: "CdParticipante",
      name: "CdParticipante",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdePositivo",
      label: "QtdePositivo",
      name: "QtdePositivo",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeNegativo",
      label: "QtdeNegativo",
      name: "QtdeNegativo",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
