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
      size: 9,
      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "CSTICMS",
      label: "CSTICMS",
      name: "CSTICMS",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Mensagem",
      label: "Mensagem",
      name: "Mensagem",
      typeField: "string",
      size: 1024,
      allowNull: false,
    },
  ],
};
