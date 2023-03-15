import { TTable } from "../../../../types/model";

export const tNaoConformidadeOperacaoProducao: TTable = {
  database: "oftalmo",
  table: "tNaoConformidadeOperacaoProducao",
  fields: [
    {
      field: "kNaoConformidadeOP",
      label: "kNaoConformidadeOP",
      name: "tNaoConformidadeOperacaoProducao_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOperacaoOP",
      label: "fkOperacaoOP",
      name: "fkOperacaoOP",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkNaoConformidade",
      label: "fkNaoConformidade",
      name: "fkNaoConformidade",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkCorrecao",
      label: "fkCorrecao",
      name: "fkCorrecao",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
