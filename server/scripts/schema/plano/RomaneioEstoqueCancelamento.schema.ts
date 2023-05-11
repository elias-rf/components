import { TTableDef } from "@/types/model";

export const RomaneioEstoqueCancelamento: TTableDef = {
  database: "plano",
  table: "RomaneioEstoqueCancelamento",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumRomaneio",
      label: "NumRomaneio",
      name: "NumRomaneio",
      typeField: "int",

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
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioCancelamento",
      label: "UsuarioCancelamento",
      name: "UsuarioCancelamento",
      typeField: "string",

      allowNull: false,
    },
  ],
};
