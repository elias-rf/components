import { TTableDef } from "@/types/model";

export const tMaquina: TTableDef = {
  database: "oftalmo",
  table: "tMaquina",
  fields: [
    {
      field: "kMaquina",
      label: "kMaquina",
      name: "tMaquina_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NomeMaquina",
      label: "NomeMaquina",
      name: "NomeMaquina",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
    },
    {
      field: "fkDivisao",
      label: "fkDivisao",
      name: "fkDivisao",
      typeField: "int",
    },
    {
      field: "fkDivisao",
      label: "fkDivisao",
      name: "fkDivisao",
      typeField: "int",
    },
    {
      field: "fkSetor",
      label: "fkSetor",
      name: "fkSetor",
      typeField: "int",
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
    },
    {
      field: "FrequenciaManutencao",
      label: "FrequenciaManutencao",
      name: "FrequenciaManutencao",
      typeField: "string",
    },
    {
      field: "Ativo",
      label: "Ativo",
      name: "Ativo",
      typeField: "int",

      defaultValue: "1",
    },
  ],
};
