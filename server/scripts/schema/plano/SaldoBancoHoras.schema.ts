import { TEntity } from "../../../../types";

export const SaldoBancoHoras: TEntity = {
  database: "plano",
  table: "SaldoBancoHoras",
  schema: [
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "SaldoBancoHoras_id",
      type: "string",
      size: 64,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DtUltAcertoBancoHoras",
      label: "DtUltAcertoBancoHoras",
      name: "DtUltAcertoBancoHoras",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "QtdeHorasSaldo",
      label: "QtdeHorasSaldo",
      name: "QtdeHorasSaldo",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};
