import { TTableDef } from "@mono/types/model";

export const RomaneioEstoqueCancelamento: TTableDef = {
  database: "plano",
  table: "RomaneioEstoqueCancelamento",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumRomaneio",
      label: "NumRomaneio",
      name: "NumRomaneio",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
      size: 1028,
      allowNull: false,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioCancelamento",
      label: "UsuarioCancelamento",
      name: "UsuarioCancelamento",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
  ],
};
