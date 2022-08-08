import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type CidadeRecord = {
  ufOld: string;
  NmCidadeIBGE: string;
  uf: string;
  CdCidadeIBGE: string;
  CdUFIBGE: string;
};

export class CidadeItemModel extends Model<CidadeRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "cidade",
      "cidadesERF",
      ["ufOld", "NmCidadeIBGE"],
      ["CdCidadeIBGE", "NmCidadeIBGE", "CdUFIBGE", "uf", "ufOld"]
    );
  }
}
