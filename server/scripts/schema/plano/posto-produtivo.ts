import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PostoProdutivo extends ModelBase {
  static tableName = "PostoProdutivo";
  static idColumn = ["CdPostoProdutivo"];

  CdPostoProdutivo!: number;
  DescPostoProdutivo!: string;
  

  static getFields() {
    return [
      "CdPostoProdutivo",
      "DescPostoProdutivo",
      ];
  }
}

PostoProdutivo.knex(connections.plano);

export type TPostoProdutivo = ModelObject<PostoProdutivo>;
