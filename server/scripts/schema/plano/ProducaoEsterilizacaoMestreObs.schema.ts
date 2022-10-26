import { TEntity } from "../../../../types";

export const ProducaoEsterilizacaoMestreObs: TEntity = {
  database: "plano",
  table: "ProducaoEsterilizacaoMestreObs",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "TipoEsterilizacao",
      label: "TipoEsterilizacao",
      name: "TipoEsterilizacao",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "NumLoteEsterilizacao",
      label: "NumLoteEsterilizacao",
      name: "NumLoteEsterilizacao",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 512,
      allowNull: false,
    },
  ],
};
