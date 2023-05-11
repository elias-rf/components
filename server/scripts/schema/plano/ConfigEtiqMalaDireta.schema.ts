import { TTableDef } from "@/types/model";

export const ConfigEtiqMalaDireta: TTableDef = {
  database: "plano",
  table: "ConfigEtiqMalaDireta",
  fields: [
    {
      field: "Impressora",
      label: "Impressora",
      name: "ConfigEtiqMalaDireta_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "QtdeEtiquetasLinha",
      label: "QtdeEtiquetasLinha",
      name: "QtdeEtiquetasLinha",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeEtiquetasColunas",
      label: "QtdeEtiquetasColunas",
      name: "QtdeEtiquetasColunas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeLinhasInicial",
      label: "QtdeLinhasInicial",
      name: "QtdeLinhasInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EspLateral",
      label: "EspLateral",
      name: "EspLateral",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeCaracteres",
      label: "QtdeCaracteres",
      name: "QtdeCaracteres",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeLinhas",
      label: "QtdeLinhas",
      name: "QtdeLinhas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CaracteresEntreEtiquetas",
      label: "CaracteresEntreEtiquetas",
      name: "CaracteresEntreEtiquetas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "LinhaRzSocial",
      label: "LinhaRzSocial",
      name: "LinhaRzSocial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "LinhaContato",
      label: "LinhaContato",
      name: "LinhaContato",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "LinhaEndereco",
      label: "LinhaEndereco",
      name: "LinhaEndereco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "LinhaBairro",
      label: "LinhaBairro",
      name: "LinhaBairro",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "LinhaCidade",
      label: "LinhaCidade",
      name: "LinhaCidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "LinhaCep",
      label: "LinhaCep",
      name: "LinhaCep",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoImpressao",
      label: "TipoImpressao",
      name: "TipoImpressao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AlturaLinha",
      label: "AlturaLinha",
      name: "AlturaLinha",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "LinhaCartaoFidelidade",
      label: "LinhaCartaoFidelidade",
      name: "LinhaCartaoFidelidade",
      typeField: "int",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
    },
    {
      field: "LinhaCartao",
      label: "LinhaCartao",
      name: "LinhaCartao",
      typeField: "int",
    },
    {
      field: "QtdeLinhasUltima",
      label: "QtdeLinhasUltima",
      name: "QtdeLinhasUltima",
      typeField: "int",
    },
  ],
};
