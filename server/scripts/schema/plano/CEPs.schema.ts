import { TTableDef } from "@mono/types/model";

export const CEPs: TTableDef = {
  database: "plano",
  table: "CEPs",
  fields: [
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      typeField: "string",
      size: 8,
      allowNull: false,
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NmLogradouroInteiro",
      label: "NmLogradouroInteiro",
      name: "NmLogradouroInteiro",
      typeField: "string",
      size: 125,
    },
    {
      field: "NmLogradouro",
      label: "NmLogradouro",
      name: "NmLogradouro",
      typeField: "string",
      size: 70,
    },
    {
      field: "TipoLogradouro",
      label: "TipoLogradouro",
      name: "TipoLogradouro",
      typeField: "string",
      size: 72,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
      size: 128,
    },
  ],
};
