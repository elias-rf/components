import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Estoque extends ModelBase {
  static tableName = "Estoque";
  static idColumn = ["CdEmpresa", "CdProduto"];

  CdEmpresa!: number;
  CdProduto!: string;
  EndPrateleira!: string;
  EstInicial!: number;
  EstAtual!: number;
  EstCorrecao!: number;
  DemandaDia!: number;
  EstMaximo!: number;
  EstMinimo!: number;
  MaximoDia!: number;
  MinimoDia!: number;
  QtdeAssistencia!: number;
  QtdeConsignacao!: number;
  QtdeDemonstracao!: number;
  QtdePedEntrada!: number;
  QtdePedSaida!: number;
  DtUltMovimento!: Date;
  EstReservado!: number;
  VlUltCustoMedio!: number;
  CdMoedaCustoMedio!: string;
  PercRepasseComercial!: number;
  PercDescontoComercial!: number;
  VlBaseCalculoSTRetido!: number;
  VlICMSSTRetido!: number;
  AliquotaSTRetido!: number;
  VlICMSSubstituto!: number;

  static getFields() {
    return [
      "CdEmpresa",
      "CdProduto",
      "EndPrateleira",
      "EstInicial",
      "EstAtual",
      "EstCorrecao",
      "DemandaDia",
      "EstMaximo",
      "EstMinimo",
      "MaximoDia",
      "MinimoDia",
      "QtdeAssistencia",
      "QtdeConsignacao",
      "QtdeDemonstracao",
      "QtdePedEntrada",
      "QtdePedSaida",
      "DtUltMovimento",
      "EstReservado",
      "VlUltCustoMedio",
      "CdMoedaCustoMedio",
      "PercRepasseComercial",
      "PercDescontoComercial",
      "VlBaseCalculoSTRetido",
      "VlICMSSTRetido",
      "AliquotaSTRetido",
      "VlICMSSubstituto",
    ];
  }
}

Estoque.knex(connections.plano);

export type TEstoque = ModelObject<Estoque>;
