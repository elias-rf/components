import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ObsNota extends ModelBase {
  static tableName = "ObsNota";
  static idColumn = [];

  CdFilial!: number;
  CdTransp!: number;
  Especie!: string;
  Frete!: string;
  Informacoes!: string;
  Informacoes2!: string;
  Informacoes3!: string;
  Informacoes4!: string;
  Informacoes5!: string;
  Marca!: string;
  Numero!: string;
  NumNota!: number;
  PlacaVeiculo!: string;
  Serie!: string;
  UfVeiculo!: string;
  PesoBruto!: number;
  PesoLiquido!: number;
  Quantidade!: number;
  Modelo!: string;
  Informacoes6!: string;
  Informacoes7!: string;
  RNTC!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "CdTransp",
      "Especie",
      "Frete",
      "Informacoes",
      "Informacoes2",
      "Informacoes3",
      "Informacoes4",
      "Informacoes5",
      "Marca",
      "Numero",
      "NumNota",
      "PlacaVeiculo",
      "Serie",
      "UfVeiculo",
      "PesoBruto",
      "PesoLiquido",
      "Quantidade",
      "Modelo",
      "Informacoes6",
      "Informacoes7",
      "RNTC",
      ];
  }
}

ObsNota.knex(connections.plano);

export type TObsNota = ModelObject<ObsNota>;
