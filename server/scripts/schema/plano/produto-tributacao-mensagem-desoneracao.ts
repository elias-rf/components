import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoTributacaoMensagemDesoneracao extends ModelBase {
  static tableName = "ProdutoTributacaoMensagemDesoneracao";
  static idColumn = ["CdBeneficioFiscal"];

  CdBeneficioFiscal!: string;
  CdMotivoDesoneracao!: number;
  

  static getFields() {
    return [
      "CdBeneficioFiscal",
      "CdMotivoDesoneracao",
      ];
  }
}

ProdutoTributacaoMensagemDesoneracao.knex(connections.plano);

export type TProdutoTributacaoMensagemDesoneracao = ModelObject<ProdutoTributacaoMensagemDesoneracao>;
