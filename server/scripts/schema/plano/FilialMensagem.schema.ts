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
      field: "TipoMensagem",
      label: "TipoMensagem",
      name: "TipoMensagem",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Mensagem",
      label: "Mensagem",
      name: "Mensagem",
      typeField: "string",
      size: 1024,
      allowNull: false,
    },
  ],
};
