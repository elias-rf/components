import { TTableDef } from "@/types/model";

export const MestreProducaoSacolas: TTableDef = {
  database: "plano",
  table: "MestreProducaoSacolas",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumProducao",
      label: "NumProducao",
      name: "NumProducao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtProducao",
      label: "DtProducao",
      name: "DtProducao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdSacola",
      label: "CdSacola",
      name: "CdSacola",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtEntrega",
      label: "DtEntrega",
      name: "DtEntrega",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Qtde",
      label: "Qtde",
      name: "Qtde",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdUnidade",
      label: "CdUnidade",
      name: "CdUnidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Largura",
      label: "Largura",
      name: "Largura",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "Comprimento",
      label: "Comprimento",
      name: "Comprimento",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "LarguraExtrusao",
      label: "LarguraExtrusao",
      name: "LarguraExtrusao",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "PesoSacola",
      label: "PesoSacola",
      name: "PesoSacola",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PesoTotal",
      label: "PesoTotal",
      name: "PesoTotal",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Oxi",
      label: "Oxi",
      name: "Oxi",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Tratamento",
      label: "Tratamento",
      name: "Tratamento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "GramaMetro",
      label: "GramaMetro",
      name: "GramaMetro",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Variacao",
      label: "Variacao",
      name: "Variacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Material",
      label: "Material",
      name: "Material",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Ping",
      label: "Ping",
      name: "Ping",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Sanfona",
      label: "Sanfona",
      name: "Sanfona",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CoresImpressao",
      label: "CoresImpressao",
      name: "CoresImpressao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Marca",
      label: "Marca",
      name: "Marca",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "EmbalagemPara",
      label: "EmbalagemPara",
      name: "EmbalagemPara",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFase",
      label: "CdFase",
      name: "CdFase",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumBobinas",
      label: "NumBobinas",
      name: "NumBobinas",
      typeField: "int",
    },
    {
      field: "Diametro",
      label: "Diametro",
      name: "Diametro",
      typeField: "int",
    },
  ],
};
