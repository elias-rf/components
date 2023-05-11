import { TTableDef } from "@/types/model";

export const CadProFarmacia: TTableDef = {
  database: "plano",
  table: "CadProFarmacia",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CadProFarmacia_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgUsoContinuo",
      label: "FgUsoContinuo",
      name: "FgUsoContinuo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PosologiaDia",
      label: "PosologiaDia",
      name: "PosologiaDia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeDoses",
      label: "QtdeDoses",
      name: "QtdeDoses",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumRegistroProduto",
      label: "NumRegistroProduto",
      name: "NumRegistroProduto",
      typeField: "string",
    },
    {
      field: "FgEnvioCaneta",
      label: "FgEnvioCaneta",
      name: "FgEnvioCaneta",
      typeField: "string",
    },
    {
      field: "NumDosesDia",
      label: "NumDosesDia",
      name: "NumDosesDia",
      typeField: "float",

      scale: 4,
    },
    {
      field: "MedidaDoses",
      label: "MedidaDoses",
      name: "MedidaDoses",
      typeField: "string",
    },
    {
      field: "FgSNGPC",
      label: "FgSNGPC",
      name: "FgSNGPC",
      typeField: "string",
    },
    {
      field: "FgVendaAtiva",
      label: "FgVendaAtiva",
      name: "FgVendaAtiva",
      typeField: "string",
    },
    {
      field: "FgTermoLabel",
      label: "FgTermoLabel",
      name: "FgTermoLabel",
      typeField: "string",
    },
    {
      field: "ObsTermoLabel",
      label: "ObsTermoLabel",
      name: "ObsTermoLabel",
      typeField: "string",
    },
    {
      field: "NmMedicamento",
      label: "NmMedicamento",
      name: "NmMedicamento",
      typeField: "string",
    },
    {
      field: "Apresentacao",
      label: "Apresentacao",
      name: "Apresentacao",
      typeField: "string",
    },
    {
      field: "FgMedicamento",
      label: "FgMedicamento",
      name: "FgMedicamento",
      typeField: "string",
    },
    {
      field: "FgTipoMedicamento",
      label: "FgTipoMedicamento",
      name: "FgTipoMedicamento",
      typeField: "int",
    },
  ],
};
