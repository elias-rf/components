import { TTableDef } from "../../../../types/model";

export const Administradora: TTableDef = {
  database: "plano",
  table: "Administradora",
  fields: [
    {
      field: "CdAdministradora",
      label: "CdAdministradora",
      name: "Administradora_id",
      typeField: "string",
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmAdministradora",
      label: "NmAdministradora",
      name: "NmAdministradora",
      typeField: "string",
      size: 50,
    },
    {
      field: "Taxa",
      label: "Taxa",
      name: "Taxa",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Prazo",
      label: "Prazo",
      name: "Prazo",
      typeField: "int",
      size: 2,
    },
    {
      field: "CdClienteAssociado",
      label: "CdClienteAssociado",
      name: "CdClienteAssociado",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgVista",
      label: "FgVista",
      name: "FgVista",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgVctoDiaUtil",
      label: "FgVctoDiaUtil",
      name: "FgVctoDiaUtil",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgTef",
      label: "FgTef",
      name: "FgTef",
      typeField: "string",
      size: 1,
    },
    {
      field: "TipoPrazoRecebimento",
      label: "TipoPrazoRecebimento",
      name: "TipoPrazoRecebimento",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgTipoCartao",
      label: "FgTipoCartao",
      name: "FgTipoCartao",
      typeField: "string",
      size: 1,
    },
    {
      field: "TipoOperacao",
      label: "TipoOperacao",
      name: "TipoOperacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "NumMinimoParcelas",
      label: "NumMinimoParcelas",
      name: "NumMinimoParcelas",
      typeField: "int",
      size: 5,
    },
    {
      field: "NumMaximoParcelas",
      label: "NumMaximoParcelas",
      name: "NumMaximoParcelas",
      typeField: "int",
      size: 5,
    },
    {
      field: "Bandeira",
      label: "Bandeira",
      name: "Bandeira",
      typeField: "int",
      size: 2,
    },
    {
      field: "CNPJCredenciadora",
      label: "CNPJCredenciadora",
      name: "CNPJCredenciadora",
      typeField: "int",
      size: 9,
    },
    {
      field: "CdCredenciadora",
      label: "CdCredenciadora",
      name: "CdCredenciadora",
      typeField: "int",
      size: 5,
    },
  ],
};
