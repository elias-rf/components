import { Schema } from "@er/types";
import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type ClienteRecord = {
  CdCliente?: string;
  RzSocial?: string;
  Cidade?: string;
  Uf?: string;
  CGC?: string;
  CdVendedor?: string;
  FgAtivo?: string;
};

export class ClienteModel extends Model<ClienteRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "cliente",
      "CadCli",
      ["CdCliente"],
      ["CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo"]
    );
  }
  async schema(): Promise<Schema> {
    return {
      pk: ["CdCliente"],
      fields: [
        {
          field: "CdCliente",
          label: "Código",
          type: "ID",
        },
        {
          field: "RzSocial",
          label: "Nome",
          type: "string",
        },
        {
          field: "Cidade",
          label: "Cidade",
          type: "string",
        },
        {
          field: "Uf",
          label: "UF",
          type: "string",
        },
        {
          field: "CGC",
          label: "CNPJ",
          type: "string",
        },
        {
          field: "CdVendedor",
          label: "Cód Vendedor",
          type: "string",
        },
        {
          field: "FgAtivo",
          label: "Ativo",
          type: "string",
        },
      ],
    };
  }
}
