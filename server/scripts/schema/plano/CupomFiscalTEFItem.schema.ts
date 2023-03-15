import { TTable } from "../../../../types/model";

export const CupomFiscalTEFItem: TTable = {
  database: "plano",
  table: "CupomFiscalTEFItem",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "float",
      size: 8,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoCampo",
      label: "TipoCampo",
      name: "TipoCampo",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Conteudo",
      label: "Conteudo",
      name: "Conteudo",
      typeField: "string",
      size: 5120,
      allowNull: false,
    },
  ],
};
