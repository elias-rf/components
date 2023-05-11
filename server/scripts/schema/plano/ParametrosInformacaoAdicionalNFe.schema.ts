import { TTableDef } from "@/types/model";

export const ParametrosInformacaoAdicionalNFe: TTableDef = {
  database: "plano",
  table: "ParametrosInformacaoAdicionalNFe",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CSTICMS",
      label: "CSTICMS",
      name: "CSTICMS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Mensagem",
      label: "Mensagem",
      name: "Mensagem",
      typeField: "string",

      allowNull: false,
    },
  ],
};
