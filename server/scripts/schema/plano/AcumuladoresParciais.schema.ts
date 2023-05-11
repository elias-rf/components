import { TTableDef } from "@/types/model";

export const AcumuladoresParciais: TTableDef = {
  database: "plano",
  table: "AcumuladoresParciais",
  fields: [
    {
      field: "CdAcumuladorParcial",
      label: "CdAcumuladorParcial",
      name: "CdAcumuladorParcial",
      typeField: "int",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
  ],
};
