import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CondPagto extends ModelBase {
  static tableName = "CondPagto";
  static idColumn = ["Codigo"];

  Codigo!: number;
  Descricao!: string;
  Prazo1!: number;
  Prazo2!: number;
  Prazo3!: number;
  Prazo4!: number;
  Prazo5!: number;
  Prazo6!: number;
  AcresFinanceiro!: number;
  FgVista!: string;
  Tipo!: string;
  VlMinimo!: number;
  Participacao1!: number;
  Participacao2!: number;
  Participacao3!: number;
  Participacao4!: number;
  Participacao5!: number;
  Participacao6!: number;
  Prazo7!: number;
  Prazo8!: number;
  Prazo9!: number;
  Prazo10!: number;
  Prazo11!: number;
  Prazo12!: number;
  Participacao7!: number;
  Participacao8!: number;
  Participacao9!: number;
  Participacao10!: number;
  Participacao11!: number;
  Participacao12!: number;
  

  static getFields() {
    return [
      "Codigo",
      "Descricao",
      "Prazo1",
      "Prazo2",
      "Prazo3",
      "Prazo4",
      "Prazo5",
      "Prazo6",
      "AcresFinanceiro",
      "FgVista",
      "Tipo",
      "VlMinimo",
      "Participacao1",
      "Participacao2",
      "Participacao3",
      "Participacao4",
      "Participacao5",
      "Participacao6",
      "Prazo7",
      "Prazo8",
      "Prazo9",
      "Prazo10",
      "Prazo11",
      "Prazo12",
      "Participacao7",
      "Participacao8",
      "Participacao9",
      "Participacao10",
      "Participacao11",
      "Participacao12",
      ];
  }
}

CondPagto.knex(connections.plano);

export type TCondPagto = ModelObject<CondPagto>;
