import { TTableDef } from "@/types/model";

export const ConfiguracaoImpConvenio: TTableDef = {
  database: "plano",
  table: "ConfiguracaoImpConvenio",
  fields: [
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "ConfiguracaoImpConvenio_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MatriculaInicial",
      label: "MatriculaInicial",
      name: "MatriculaInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MatriculaFinal",
      label: "MatriculaFinal",
      name: "MatriculaFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NomeInicial",
      label: "NomeInicial",
      name: "NomeInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NomeFinal",
      label: "NomeFinal",
      name: "NomeFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BloqueioInicial",
      label: "BloqueioInicial",
      name: "BloqueioInicial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BloqueioFinal",
      label: "BloqueioFinal",
      name: "BloqueioFinal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TextoBloqueio",
      label: "TextoBloqueio",
      name: "TextoBloqueio",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LimiteInicial",
      label: "LimiteInicial",
      name: "LimiteInicial",
      typeField: "int",
    },
    {
      field: "LimiteFinal",
      label: "LimiteFinal",
      name: "LimiteFinal",
      typeField: "int",
    },
    {
      field: "CasasDecimaisLimite",
      label: "CasasDecimaisLimite",
      name: "CasasDecimaisLimite",
      typeField: "int",
    },
    {
      field: "TitularInicial",
      label: "TitularInicial",
      name: "TitularInicial",
      typeField: "int",
    },
    {
      field: "TitularFinal",
      label: "TitularFinal",
      name: "TitularFinal",
      typeField: "int",
    },
    {
      field: "TextoTitular",
      label: "TextoTitular",
      name: "TextoTitular",
      typeField: "string",
    },
    {
      field: "DependenteInicial",
      label: "DependenteInicial",
      name: "DependenteInicial",
      typeField: "int",
    },
    {
      field: "DependenteFinal",
      label: "DependenteFinal",
      name: "DependenteFinal",
      typeField: "int",
    },
    {
      field: "TextoDependente",
      label: "TextoDependente",
      name: "TextoDependente",
      typeField: "string",
    },
  ],
};
