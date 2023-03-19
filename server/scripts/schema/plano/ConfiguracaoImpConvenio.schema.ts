import { TTableDef } from "../../../../types/model";

export const ConfiguracaoImpConvenio: TTableDef = {
  database: "plano",
  table: "ConfiguracaoImpConvenio",
  fields: [
    {
      field: "IdLayOut",
      label: "IdLayOut",
      name: "ConfiguracaoImpConvenio_id",
      typeField: "string",
      size: 20,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "MatriculaInicial",
      label: "MatriculaInicial",
      name: "MatriculaInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MatriculaFinal",
      label: "MatriculaFinal",
      name: "MatriculaFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NomeInicial",
      label: "NomeInicial",
      name: "NomeInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NomeFinal",
      label: "NomeFinal",
      name: "NomeFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "BloqueioInicial",
      label: "BloqueioInicial",
      name: "BloqueioInicial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "BloqueioFinal",
      label: "BloqueioFinal",
      name: "BloqueioFinal",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TextoBloqueio",
      label: "TextoBloqueio",
      name: "TextoBloqueio",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "LimiteInicial",
      label: "LimiteInicial",
      name: "LimiteInicial",
      typeField: "int",
      size: 2,
    },
    {
      field: "LimiteFinal",
      label: "LimiteFinal",
      name: "LimiteFinal",
      typeField: "int",
      size: 2,
    },
    {
      field: "CasasDecimaisLimite",
      label: "CasasDecimaisLimite",
      name: "CasasDecimaisLimite",
      typeField: "int",
      size: 2,
    },
    {
      field: "TitularInicial",
      label: "TitularInicial",
      name: "TitularInicial",
      typeField: "int",
      size: 4,
    },
    {
      field: "TitularFinal",
      label: "TitularFinal",
      name: "TitularFinal",
      typeField: "int",
      size: 4,
    },
    {
      field: "TextoTitular",
      label: "TextoTitular",
      name: "TextoTitular",
      typeField: "string",
      size: 16,
    },
    {
      field: "DependenteInicial",
      label: "DependenteInicial",
      name: "DependenteInicial",
      typeField: "int",
      size: 4,
    },
    {
      field: "DependenteFinal",
      label: "DependenteFinal",
      name: "DependenteFinal",
      typeField: "int",
      size: 4,
    },
    {
      field: "TextoDependente",
      label: "TextoDependente",
      name: "TextoDependente",
      typeField: "string",
      size: 16,
    },
  ],
};
