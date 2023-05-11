import { TTableDef } from "@/types/model";

export const AgendaInteracao: TTableDef = {
  database: "plano",
  table: "AgendaInteracao",
  fields: [
    {
      field: "IdCompromisso",
      label: "IdCompromisso",
      name: "IdCompromisso",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtInteracaoPrevista",
      label: "DtInteracaoPrevista",
      name: "DtInteracaoPrevista",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DescricaoInteracaoPrevista",
      label: "DescricaoInteracaoPrevista",
      name: "DescricaoInteracaoPrevista",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UsuarioInteracaoPrevista",
      label: "UsuarioInteracaoPrevista",
      name: "UsuarioInteracaoPrevista",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoInteracaoPrevista",
      label: "TipoInteracaoPrevista",
      name: "TipoInteracaoPrevista",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtInteracaoRealizada",
      label: "DtInteracaoRealizada",
      name: "DtInteracaoRealizada",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DescricaoInteracaoRealizada",
      label: "DescricaoInteracaoRealizada",
      name: "DescricaoInteracaoRealizada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UsuarioInteracaoRealizada",
      label: "UsuarioInteracaoRealizada",
      name: "UsuarioInteracaoRealizada",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoInteracaoRealizada",
      label: "TipoInteracaoRealizada",
      name: "TipoInteracaoRealizada",
      typeField: "string",

      allowNull: false,
    },
  ],
};
