import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratoAluguelContagem extends ModelBase {
  static tableName = "ContratoAluguelContagem";
  static idColumn = [];

  CdCliente!: number;
  DiaContr!: number;
  CdProduto!: string;
  NumSerie!: string;
  DtContagem!: Date;
  ContagemAnterior!: number;
  ContagemAtual!: number;
  

  static getFields() {
    return [
      "CdCliente",
      "DiaContr",
      "CdProduto",
      "NumSerie",
      "DtContagem",
      "ContagemAnterior",
      "ContagemAtual",
      ];
  }
}

ContratoAluguelContagem.knex(connections.plano);

export type TContratoAluguelContagem = ModelObject<ContratoAluguelContagem>;
