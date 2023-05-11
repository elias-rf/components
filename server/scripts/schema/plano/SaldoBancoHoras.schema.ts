import { TTableDef } from "@/types/model";

export const SaldoBancoHoras: TTableDef = {
  database: "plano",
  table: "SaldoBancoHoras",
  fields: [
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "SaldoBancoHoras_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltAcertoBancoHoras",
      label: "DtUltAcertoBancoHoras",
      name: "DtUltAcertoBancoHoras",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "QtdeHorasSaldo",
      label: "QtdeHorasSaldo",
      name: "QtdeHorasSaldo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};
