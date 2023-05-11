import { TTableDef } from "@/types/model";

export const SpedFiscalRegE110: TTableDef = {
  database: "plano",
  table: "SpedFiscalRegE110",
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
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlAjusteDebito",
      label: "VlAjusteDebito",
      name: "VlAjusteDebito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAjusteDebitoTotal",
      label: "VlAjusteDebitoTotal",
      name: "VlAjusteDebitoTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlEstornoCredito",
      label: "VlEstornoCredito",
      name: "VlEstornoCredito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAjusteCredito",
      label: "VlAjusteCredito",
      name: "VlAjusteCredito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlAjusteCreditoTotal",
      label: "VlAjusteCreditoTotal",
      name: "VlAjusteCreditoTotal",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlEstornoDebito",
      label: "VlEstornoDebito",
      name: "VlEstornoDebito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlSaldoCredorAnterior",
      label: "VlSaldoCredorAnterior",
      name: "VlSaldoCredorAnterior",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlTotalDeducoes",
      label: "VlTotalDeducoes",
      name: "VlTotalDeducoes",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlExtraApuracao",
      label: "VlExtraApuracao",
      name: "VlExtraApuracao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
