import { TTableDef } from "@/types/model";

export const SpedReceitaBruta: TTableDef = {
  database: "plano",
  table: "SpedReceitaBruta",
  fields: [
    {
      field: "CNPJCentralizador",
      label: "CNPJCentralizador",
      name: "CNPJCentralizador",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PeriodoApuracao",
      label: "PeriodoApuracao",
      name: "PeriodoApuracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "VlTributadoInterno",
      label: "VlTributadoInterno",
      name: "VlTributadoInterno",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlNaoTributadoIterno",
      label: "VlNaoTributadoIterno",
      name: "VlNaoTributadoIterno",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlExportacao",
      label: "VlExportacao",
      name: "VlExportacao",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceitaCumulativa",
      label: "VlReceitaCumulativa",
      name: "VlReceitaCumulativa",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlReceitaBruta",
      label: "VlReceitaBruta",
      name: "VlReceitaBruta",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
