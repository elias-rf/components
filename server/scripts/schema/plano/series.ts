import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Series extends ModelBase {
  static tableName = "Series";
  static idColumn = [];

  CdSerie!: string;
  MensagemCupom!: string;
  MensagemReducao!: string;
  MensagemSubstituicao!: string;
  Descricao!: string;
  Observacao1!: string;
  Observacao2!: string;
  Observacao3!: string;
  Observacao4!: string;
  Produtos!: string;
  Servicos!: string;
  MensagemCorpo!: string;
  Modelo!: string;
  FgAtivo!: string;
  MensagemInstitucionalNFCe!: string;
  FgCabecalho!: string;
  

  static getFields() {
    return [
      "CdSerie",
      "MensagemCupom",
      "MensagemReducao",
      "MensagemSubstituicao",
      "Descricao",
      "Observacao1",
      "Observacao2",
      "Observacao3",
      "Observacao4",
      "Produtos",
      "Servicos",
      "MensagemCorpo",
      "Modelo",
      "FgAtivo",
      "MensagemInstitucionalNFCe",
      "FgCabecalho",
      ];
  }
}

Series.knex(connections.plano);

export type TSeries = ModelObject<Series>;
