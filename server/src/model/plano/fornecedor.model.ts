import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type FornecedorRecord = {
  CdFornecedor?: string;
  RzSocial?: string;
  NmFantasia?: string;
  Cidade?: string;
  Uf?: string;
  CdPais?: string;
  CGC?: string;
  InscEst?: string;
  FgAtivo?: string;
};

export class FornecedorModel extends Model<FornecedorRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "fornecedor",
      "CadFor",
      ["CdFornecedor"],
      [
        "CdFornecedor",
        "RzSocial",
        "NmFantasia",
        "Cidade",
        "Uf",
        "CdPais",
        "CGC",
        "InscEst",
        "FgAtivo",
      ]
    );
  }
}
