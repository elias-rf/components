import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestrePedidoOrdemServico extends ModelBase {
  static tableName = "MestrePedidoOrdemServico";
  static idColumn = [];

  CdFilial!: number;
  NumPedido!: number;
  DtEmissao!: Date;
  Veiculo!: string;
  Marca!: string;
  Cor!: string;
  Ano!: number;
  Placa!: string;
  Frota!: string;
  NumSinistro!: string;
  Motorista!: string;
  NumNota!: number;
  KM!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPedido",
      "DtEmissao",
      "Veiculo",
      "Marca",
      "Cor",
      "Ano",
      "Placa",
      "Frota",
      "NumSinistro",
      "Motorista",
      "NumNota",
      "KM",
      ];
  }
}

MestrePedidoOrdemServico.knex(connections.plano);

export type TMestrePedidoOrdemServico = ModelObject<MestrePedidoOrdemServico>;
