import { TTableDef } from "@/types/model";

export const tNaoConformidadeOperacaoProducao: TTableDef = {
  database: "oftalmo",
  table: "tNaoConformidadeOperacaoProducao",
  fields: [
    {
      field: "kNaoConformidadeOP",
      label: "kNaoConformidadeOP",
      name: "tNaoConformidadeOperacaoProducao_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOperacaoOP",
      label: "fkOperacaoOP",
      name: "fkOperacaoOP",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkNaoConformidade",
      label: "fkNaoConformidade",
      name: "fkNaoConformidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkCorrecao",
      label: "fkCorrecao",
      name: "fkCorrecao",
      typeField: "int",

      allowNull: false,
    },
  ],
};
