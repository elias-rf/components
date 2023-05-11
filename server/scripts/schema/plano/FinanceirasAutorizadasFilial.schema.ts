import { TTableDef } from "@/types/model";

export const FinanceirasAutorizadasFilial: TTableDef = {
  database: "plano",
  table: "FinanceirasAutorizadasFilial",
  fields: [
    {
      field: "CdFinanceira",
      label: "CdFinanceira",
      name: "CdFinanceira",
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
      field: "CdClienteAssociado",
      label: "CdClienteAssociado",
      name: "CdClienteAssociado",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PrazoRecebimento",
      label: "PrazoRecebimento",
      name: "PrazoRecebimento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoRecebimento",
      label: "TipoRecebimento",
      name: "TipoRecebimento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgDiaUtilRecebimento",
      label: "FgDiaUtilRecebimento",
      name: "FgDiaUtilRecebimento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TaxaAdministracao",
      label: "TaxaAdministracao",
      name: "TaxaAdministracao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumParcelas",
      label: "NumParcelas",
      name: "NumParcelas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CoeficienteCalculoParcela",
      label: "CoeficienteCalculoParcela",
      name: "CoeficienteCalculoParcela",
      typeField: "int",

      scale: 7,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",

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
