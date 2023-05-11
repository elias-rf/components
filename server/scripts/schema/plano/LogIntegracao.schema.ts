import { TTableDef } from "@/types/model";

export const LogIntegracao: TTableDef = {
  database: "plano",
  table: "LogIntegracao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "LogIntegracao_id",
      typeField: "int",

      primaryKey: true,
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
      field: "DHArquivo",
      label: "DHArquivo",
      name: "DHArquivo",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "IdEquipamento",
      label: "IdEquipamento",
      name: "IdEquipamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "EnderecoEmail",
      label: "EnderecoEmail",
      name: "EnderecoEmail",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QtdeArquivos",
      label: "QtdeArquivos",
      name: "QtdeArquivos",
      typeField: "int",

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
