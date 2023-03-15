import { TTable } from "../../../../types/model";

export const ProducaoEsterilizacaoMestreObs: TTable = {
  database: "plano",
  table: "ProducaoEsterilizacaoMestreObs",
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
      field: "TipoEsterilizacao",
      label: "TipoEsterilizacao",
      name: "TipoEsterilizacao",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "NumLoteEsterilizacao",
      label: "NumLoteEsterilizacao",
      name: "NumLoteEsterilizacao",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
  ],
};
