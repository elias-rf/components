import { TTableDef } from "@/types/model";

export const ECFMeiosPagamento: TTableDef = {
  database: "plano",
  table: "ECFMeiosPagamento",
  fields: [
    {
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumCOO",
      label: "NumCOO",
      name: "NumCOO",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoPagamento",
      label: "TipoPagamento",
      name: "TipoPagamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumGNF",
      label: "NumGNF",
      name: "NumGNF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumCCF",
      label: "NumCCF",
      name: "NumCCF",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotal",
      label: "VlTotal",
      name: "VlTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlPagamento",
      label: "VlPagamento",
      name: "VlPagamento",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FgEstorno",
      label: "FgEstorno",
      name: "FgEstorno",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlEstorno",
      label: "VlEstorno",
      name: "VlEstorno",
      typeField: "float",

      scale: 4,
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
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoDoc",
      label: "TipoDoc",
      name: "TipoDoc",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ControleSerie",
      label: "ControleSerie",
      name: "ControleSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ControleCOO",
      label: "ControleCOO",
      name: "ControleCOO",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ControleSerieDoc",
      label: "ControleSerieDoc",
      name: "ControleSerieDoc",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ControleTipo",
      label: "ControleTipo",
      name: "ControleTipo",
      typeField: "string",

      allowNull: false,
    },
  ],
};
