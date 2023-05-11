import { TTableDef } from "@/types/model";

export const EstoqueEscriturado: TTableDef = {
  database: "plano",
  table: "EstoqueEscriturado",
  fields: [
    {
      field: "MesBase",
      label: "MesBase",
      name: "MesBase",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AnoBase",
      label: "AnoBase",
      name: "AnoBase",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdIndEstoque",
      label: "CdIndEstoque",
      name: "CdIndEstoque",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoParticipante",
      label: "TipoParticipante",
      name: "TipoParticipante",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdParticipante",
      label: "CdParticipante",
      name: "CdParticipante",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Qtde",
      label: "Qtde",
      name: "Qtde",
      typeField: "float",

      scale: 4,
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
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};
