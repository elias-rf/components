import { TTable } from "../../../../types";

export const ProducaoEsterilizacaoMestreObs: TTable = {
  database: "plano",
  table: "ProducaoEsterilizacaoMestreObs",
  fields: [
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
