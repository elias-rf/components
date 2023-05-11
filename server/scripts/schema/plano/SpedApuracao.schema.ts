import { TTableDef } from "@/types/model";

export const SpedApuracao: TTableDef = {
  database: "plano",
  table: "SpedApuracao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PeriodoApuracao",
      label: "PeriodoApuracao",
      name: "PeriodoApuracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "OrigemCredito",
      label: "OrigemCredito",
      name: "OrigemCredito",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CNPJCedente",
      label: "CNPJCedente",
      name: "CNPJCedente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdTipoCredito",
      label: "CdTipoCredito",
      name: "CdTipoCredito",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlApuradoAnterior",
      label: "VlApuradoAnterior",
      name: "VlApuradoAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlExtemporaneoAnterior",
      label: "VlExtemporaneoAnterior",
      name: "VlExtemporaneoAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescontoAnterior",
      label: "VlDescontoAnterior",
      name: "VlDescontoAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlRessarcimentoAnterior",
      label: "VlRessarcimentoAnterior",
      name: "VlRessarcimentoAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDCIAnterior",
      label: "VlDCIAnterior",
      name: "VlDCIAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescontoPeriodo",
      label: "VlDescontoPeriodo",
      name: "VlDescontoPeriodo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlRessarcimentoPeriodo",
      label: "VlRessarcimentoPeriodo",
      name: "VlRessarcimentoPeriodo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDCIPeriodo",
      label: "VlDCIPeriodo",
      name: "VlDCIPeriodo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTransferido",
      label: "VlTransferido",
      name: "VlTransferido",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlOutrasFormas",
      label: "VlOutrasFormas",
      name: "VlOutrasFormas",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
