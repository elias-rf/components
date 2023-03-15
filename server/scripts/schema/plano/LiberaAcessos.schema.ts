import { TTable } from "../../../../types/model";

export const LiberaAcessos: TTable = {
  database: "plano",
  table: "LiberaAcessos",
  fields: [
    {
      field: "CgcCpf",
      label: "CgcCpf",
      name: "LiberaAcessos_id",
      typeField: "string",
      size: 60,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DHLibEmergencia",
      label: "DHLibEmergencia",
      name: "DHLibEmergencia",
      typeField: "string",
      size: 60,
      allowNull: false,
    },
  ],
};
