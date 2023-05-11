import { TTableDef } from "@/types/model";

export const Series: TTableDef = {
  database: "plano",
  table: "Series",
  fields: [
    {
      field: "CdSerie",
      label: "CdSerie",
      name: "CdSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "MensagemCupom",
      label: "MensagemCupom",
      name: "MensagemCupom",
      typeField: "string",
    },
    {
      field: "MensagemReducao",
      label: "MensagemReducao",
      name: "MensagemReducao",
      typeField: "string",
    },
    {
      field: "MensagemSubstituicao",
      label: "MensagemSubstituicao",
      name: "MensagemSubstituicao",
      typeField: "string",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "Observacao1",
      label: "Observacao1",
      name: "Observacao1",
      typeField: "string",
    },
    {
      field: "Observacao2",
      label: "Observacao2",
      name: "Observacao2",
      typeField: "string",
    },
    {
      field: "Observacao3",
      label: "Observacao3",
      name: "Observacao3",
      typeField: "string",
    },
    {
      field: "Observacao4",
      label: "Observacao4",
      name: "Observacao4",
      typeField: "string",
    },
    {
      field: "Produtos",
      label: "Produtos",
      name: "Produtos",
      typeField: "string",
    },
    {
      field: "Servicos",
      label: "Servicos",
      name: "Servicos",
      typeField: "string",
    },
    {
      field: "MensagemCorpo",
      label: "MensagemCorpo",
      name: "MensagemCorpo",
      typeField: "string",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
    {
      field: "MensagemInstitucionalNFCe",
      label: "MensagemInstitucionalNFCe",
      name: "MensagemInstitucionalNFCe",
      typeField: "string",
    },
    {
      field: "FgCabecalho",
      label: "FgCabecalho",
      name: "FgCabecalho",
      typeField: "string",
    },
  ],
};
