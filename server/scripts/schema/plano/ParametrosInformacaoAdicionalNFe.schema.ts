import { TEntity } from "../../../../types";

export const ParametrosInformacaoAdicionalNFe: TEntity = {
  database: "plano",
  table: "ParametrosInformacaoAdicionalNFe",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "CSTICMS",
      label: "CSTICMS",
      name: "CSTICMS",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Mensagem",
      label: "Mensagem",
      name: "Mensagem",
      type: "string",
      size: 1024,
      allowNull: false,
    },
  ],
};
