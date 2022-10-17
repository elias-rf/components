import { TEntity } from "../../../../types";

export const ECFMeiosPagamento: TEntity = {
  database: "plano",
  table: "ECFMeiosPagamento",
  fields: [
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoPagamento",
      label: "TipoPagamento",
      name: "TipoPagamento",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "NumGNF",
      label: "NumGNF",
      name: "NumGNF",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCCF",
      label: "NumCCF",
      name: "NumCCF",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPagamento",
      label: "VlPagamento",
      name: "VlPagamento",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FgEstorno",
      label: "FgEstorno",
      name: "FgEstorno",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "VlEstorno",
      label: "VlEstorno",
      name: "VlEstorno",
      type: "float",
      size: 8,
      scale: 4,
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
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "TipoDoc",
      label: "TipoDoc",
      name: "TipoDoc",
      type: "string",
      size: 4,
      allowNull: false,
    },
    {
      field: "ControleSerie",
      label: "ControleSerie",
      name: "ControleSerie",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "ControleCOO",
      label: "ControleCOO",
      name: "ControleCOO",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "ControleSerieDoc",
      label: "ControleSerieDoc",
      name: "ControleSerieDoc",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ControleTipo",
      label: "ControleTipo",
      name: "ControleTipo",
      type: "string",
      size: 62,
      allowNull: false,
    },
  ],
};
