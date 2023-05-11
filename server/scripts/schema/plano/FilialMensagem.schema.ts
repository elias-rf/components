import { TTableDef } from "@/types/model";

export const FilialMensagem: TTableDef = {
  database: "plano",
  table: "FilialMensagem",
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
      field: "TipoMensagem",
      label: "TipoMensagem",
      name: "TipoMensagem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Mensagem",
      label: "Mensagem",
      name: "Mensagem",
      typeField: "string",

      allowNull: false,
    },
  ],
};
