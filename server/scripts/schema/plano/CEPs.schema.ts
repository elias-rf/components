import { TTableDef } from "@/types/model";

export const CEPs: TTableDef = {
  database: "plano",
  table: "CEPs",
  fields: [
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmLogradouroInteiro",
      label: "NmLogradouroInteiro",
      name: "NmLogradouroInteiro",
      typeField: "string",
    },
    {
      field: "NmLogradouro",
      label: "NmLogradouro",
      name: "NmLogradouro",
      typeField: "string",
    },
    {
      field: "TipoLogradouro",
      label: "TipoLogradouro",
      name: "TipoLogradouro",
      typeField: "string",
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
    },
  ],
};
