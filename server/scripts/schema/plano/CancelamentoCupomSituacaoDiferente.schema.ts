import { TTableDef } from "@/types/model";

export const CancelamentoCupomSituacaoDiferente: TTableDef = {
  database: "plano",
  table: "CancelamentoCupomSituacaoDiferente",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtLancamento",
      label: "DtLancamento",
      name: "DtLancamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SerieNotaReferente",
      label: "SerieNotaReferente",
      name: "SerieNotaReferente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloNotaReferente",
      label: "ModeloNotaReferente",
      name: "ModeloNotaReferente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumNotaReferente",
      label: "NumNotaReferente",
      name: "NumNotaReferente",
      typeField: "float",

      scale: 4,
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
  ],
};
