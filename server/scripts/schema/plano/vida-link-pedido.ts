import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class VidaLinkPedido extends ModelBase {
  static tableName = "VidaLinkPedido";
  static idColumn = ["NumAutorizacao"];

  NumAutorizacao!: number;
  CdFilial!: number;
  PlanoConvenio!: string;
  CdConvenio!: string;
  NmConvenio!: string;
  NmConveniado!: string;
  NumCartao!: string;
  TipoAutorizacao!: string;
  Estacao!: string;
  VlTotal!: number;
  VlReceberLoja!: number;
  VlReceberConvenio!: number;
  VlReceberVidaLink!: number;
  NumPedido!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "NumAutorizacao",
      "CdFilial",
      "PlanoConvenio",
      "CdConvenio",
      "NmConvenio",
      "NmConveniado",
      "NumCartao",
      "TipoAutorizacao",
      "Estacao",
      "VlTotal",
      "VlReceberLoja",
      "VlReceberConvenio",
      "VlReceberVidaLink",
      "NumPedido",
      "NumDoc",
      "Serie",
      "Modelo",
      ];
  }
}

VidaLinkPedido.knex(connections.plano);

export type TVidaLinkPedido = ModelObject<VidaLinkPedido>;
