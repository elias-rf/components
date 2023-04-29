import { TTableDef } from "@mono/types/model";

export const SaldoBancoHoras: TTableDef = {
  database: "plano",
  table: "SaldoBancoHoras",
  fields: [
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "SaldoBancoHoras_id",
      typeField: "string",
      size: 64,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltAcertoBancoHoras",
      label: "DtUltAcertoBancoHoras",
      name: "DtUltAcertoBancoHoras",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "QtdeHorasSaldo",
      label: "QtdeHorasSaldo",
      name: "QtdeHorasSaldo",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
