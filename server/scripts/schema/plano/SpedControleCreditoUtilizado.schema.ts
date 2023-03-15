import { TTable } from "../../../../types/model";

export const SpedControleCreditoUtilizado: TTable = {
  database: "plano",
  table: "SpedControleCreditoUtilizado",
  fields: [
    {
      field: "Cnpj",
      label: "Cnpj",
      name: "Cnpj",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "PeriodoApuracao",
      label: "PeriodoApuracao",
      name: "PeriodoApuracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "PeriodoUtilizacao",
      label: "PeriodoUtilizacao",
      name: "PeriodoUtilizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "TipoImposto",
      label: "TipoImposto",
      name: "TipoImposto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdCredito",
      label: "CdCredito",
      name: "CdCredito",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlCreditoUtilizado",
      label: "VlCreditoUtilizado",
      name: "VlCreditoUtilizado",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtGeracao",
      label: "DtGeracao",
      name: "DtGeracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};
