import { TTableDef } from "@/types/model";

export const NotaItemDesoneracao: TTableDef = {
  database: "plano",
  table: "NotaItemDesoneracao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

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
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

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
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdBeneficioFiscal",
      label: "CdBeneficioFiscal",
      name: "CdBeneficioFiscal",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AliquotaDesoneracao",
      label: "AliquotaDesoneracao",
      name: "AliquotaDesoneracao",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "VlDesoneracao",
      label: "VlDesoneracao",
      name: "VlDesoneracao",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "CdMotivoDesoneracao",
      label: "CdMotivoDesoneracao",
      name: "CdMotivoDesoneracao",
      typeField: "int",

      allowNull: false,
    },
  ],
};
