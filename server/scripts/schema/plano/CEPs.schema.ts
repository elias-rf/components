import { TEntity } from "../../../../types";

export const CEPs: TEntity = {
  database: "plano",
  table: "CEPs",
  schema: [
    {
      field: "CEP",
      label: "CEP",
      name: "CEP",
      type: "string",
      size: 8,
      allowNull: false,
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NmLogradouroInteiro",
      label: "NmLogradouroInteiro",
      name: "NmLogradouroInteiro",
      type: "string",
      size: 125,
    },
    {
      field: "NmLogradouro",
      label: "NmLogradouro",
      name: "NmLogradouro",
      type: "string",
      size: 70,
    },
    {
      field: "TipoLogradouro",
      label: "TipoLogradouro",
      name: "TipoLogradouro",
      type: "string",
      size: 72,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      type: "string",
      size: 128,
    },
  ],
};
