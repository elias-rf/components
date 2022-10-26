import { TEntity } from "../../../../types";

export const FilialMensagem: TEntity = {
  database: "plano",
  table: "FilialMensagem",
  schema: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "TipoMensagem",
      label: "TipoMensagem",
      name: "TipoMensagem",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Mensagem",
      label: "Mensagem",
      name: "Mensagem",
      type: "string",
      size: 1024,
      allowNull: false,
    },
  ],
};
