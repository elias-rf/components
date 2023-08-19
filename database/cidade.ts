import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Cidade extends ModelBase {
  static tableName = "cidadesERF";
  static idColumn = "NmCidadeIBGE";

  CdUFIBGE!: number;
  CdCidadeIBGE!: string;
  NmCidadeIBGE!: string;
  uf!: string;
  ufOld!: string;

  static getFields() {
    return ["CdUFIBGE", "CdCidadeIBGE", "NmCidadeIBGE", "uf", "ufOld"];
  }
}

Cidade.knex(connections.plano);

export type TCidade = ModelObject<Cidade>;
