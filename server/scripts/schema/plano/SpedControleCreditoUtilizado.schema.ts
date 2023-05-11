import { TTableDef } from "@/types/model";

export const SpedControleCreditoUtilizado: TTableDef = {
  database: "plano",
  table: "SpedControleCreditoUtilizado",
  fields: [
    {
      field: "Cnpj",
      label: "Cnpj",
      name: "Cnpj",
      typeField: "int",

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
      field: "PeriodoUtilizacao",
      label: "PeriodoUtilizacao",
      name: "PeriodoUtilizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "TipoImposto",
      label: "TipoImposto",
      name: "TipoImposto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCredito",
      label: "CdCredito",
      name: "CdCredito",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlCreditoUtilizado",
      label: "VlCreditoUtilizado",
      name: "VlCreditoUtilizado",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtGeracao",
      label: "DtGeracao",
      name: "DtGeracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
