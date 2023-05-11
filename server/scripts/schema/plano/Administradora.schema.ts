import { TTableDef } from "@/types/model";

export const Administradora: TTableDef = {
  database: "plano",
  table: "Administradora",
  fields: [
    {
      field: "CdAdministradora",
      label: "CdAdministradora",
      name: "Administradora_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmAdministradora",
      label: "NmAdministradora",
      name: "NmAdministradora",
      typeField: "string",
    },
    {
      field: "Taxa",
      label: "Taxa",
      name: "Taxa",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Prazo",
      label: "Prazo",
      name: "Prazo",
      typeField: "int",
    },
    {
      field: "CdClienteAssociado",
      label: "CdClienteAssociado",
      name: "CdClienteAssociado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgVista",
      label: "FgVista",
      name: "FgVista",
      typeField: "string",
    },
    {
      field: "FgVctoDiaUtil",
      label: "FgVctoDiaUtil",
      name: "FgVctoDiaUtil",
      typeField: "string",
    },
    {
      field: "FgTef",
      label: "FgTef",
      name: "FgTef",
      typeField: "string",
    },
    {
      field: "TipoPrazoRecebimento",
      label: "TipoPrazoRecebimento",
      name: "TipoPrazoRecebimento",
      typeField: "string",
    },
    {
      field: "FgTipoCartao",
      label: "FgTipoCartao",
      name: "FgTipoCartao",
      typeField: "string",
    },
    {
      field: "TipoOperacao",
      label: "TipoOperacao",
      name: "TipoOperacao",
      typeField: "string",
    },
    {
      field: "NumMinimoParcelas",
      label: "NumMinimoParcelas",
      name: "NumMinimoParcelas",
      typeField: "int",
    },
    {
      field: "NumMaximoParcelas",
      label: "NumMaximoParcelas",
      name: "NumMaximoParcelas",
      typeField: "int",
    },
    {
      field: "Bandeira",
      label: "Bandeira",
      name: "Bandeira",
      typeField: "int",
    },
    {
      field: "CNPJCredenciadora",
      label: "CNPJCredenciadora",
      name: "CNPJCredenciadora",
      typeField: "int",
    },
    {
      field: "CdCredenciadora",
      label: "CdCredenciadora",
      name: "CdCredenciadora",
      typeField: "int",
    },
  ],
};
