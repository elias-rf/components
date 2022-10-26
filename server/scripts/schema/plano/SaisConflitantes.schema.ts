import { TEntity } from "../../../../types";

export const SaisConflitantes: TEntity = {
  database: "plano",
  table: "SaisConflitantes",
  schema: [
    {
      field: "CdSalOrigem",
      label: "CdSalOrigem",
      name: "CdSalOrigem",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdSalDestino",
      label: "CdSalDestino",
      name: "CdSalDestino",
      type: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "FgTipoAdvertencia",
      label: "FgTipoAdvertencia",
      name: "FgTipoAdvertencia",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 1024,
    },
  ],
};
