import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EcfTotalizador extends ModelBase {
  static tableName = "ECFTotalizador";
  static idColumn = [];

  CNPJFilial!: number;
  NumECF!: number;
  DtBase!: Date;
  Totalizador!: string;
  Aliquota!: number;
  VlAcumulado!: number;
  NumSerie!: string;
  NumReducaoZ!: number;
  NumUsuario!: number;
  PosicaoTotalizador!: number;
  ControleFilial!: number;
  ControleECF!: number;
  ControleData!: Date;
  ControleTotalizador!: string;
  ControleAliquota!: number;
  ControlePosicao!: number;
  

  static getFields() {
    return [
      "CNPJFilial",
      "NumECF",
      "DtBase",
      "Totalizador",
      "Aliquota",
      "VlAcumulado",
      "NumSerie",
      "NumReducaoZ",
      "NumUsuario",
      "PosicaoTotalizador",
      "ControleFilial",
      "ControleECF",
      "ControleData",
      "ControleTotalizador",
      "ControleAliquota",
      "ControlePosicao",
      ];
  }
}

EcfTotalizador.knex(connections.plano);

export type TEcfTotalizador = ModelObject<EcfTotalizador>;
