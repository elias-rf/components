import { TTableDef } from "@/types/model";

export const SaisConflitantes: TTableDef = {
  database: "plano",
  table: "SaisConflitantes",
  fields: [
    {
      field: "CdSalOrigem",
      label: "CdSalOrigem",
      name: "CdSalOrigem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdSalDestino",
      label: "CdSalDestino",
      name: "CdSalDestino",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgTipoAdvertencia",
      label: "FgTipoAdvertencia",
      name: "FgTipoAdvertencia",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
  ],
};
