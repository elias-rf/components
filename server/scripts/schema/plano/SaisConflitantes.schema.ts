import { TTableDef } from "@mono/types/model";

export const SaisConflitantes: TTableDef = {
  database: "plano",
  table: "SaisConflitantes",
  fields: [
    {
      field: "CdSalOrigem",
      label: "CdSalOrigem",
      name: "CdSalOrigem",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdSalDestino",
      label: "CdSalDestino",
      name: "CdSalDestino",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "FgTipoAdvertencia",
      label: "FgTipoAdvertencia",
      name: "FgTipoAdvertencia",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 1024,
    },
  ],
};
