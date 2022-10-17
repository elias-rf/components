import { TEntity } from "../../../../types";

export const tNaoConformidadeOperacaoProducao: TEntity = {
  database: "oftalmo",
  table: "tNaoConformidadeOperacaoProducao",
  fields: [
    {
      field: "kNaoConformidadeOP",
      label: "kNaoConformidadeOP",
      name: "tNaoConformidadeOperacaoProducao_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOperacaoOP",
      label: "fkOperacaoOP",
      name: "fkOperacaoOP",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkNaoConformidade",
      label: "fkNaoConformidade",
      name: "fkNaoConformidade",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkCorrecao",
      label: "fkCorrecao",
      name: "fkCorrecao",
      type: "int",
      size: 4,
      allowNull: false,
    },
  ],
};
