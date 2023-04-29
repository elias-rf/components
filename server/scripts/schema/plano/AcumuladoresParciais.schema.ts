import { TTableDef } from "@mono/types/model";

export const AcumuladoresParciais: TTableDef = {
  database: "plano",
  table: "AcumuladoresParciais",
  fields: [
    {
      field: "CdAcumuladorParcial",
      label: "CdAcumuladorParcial",
      name: "CdAcumuladorParcial",
      typeField: "int",
      size: 4,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 50,
    },
  ],
};
