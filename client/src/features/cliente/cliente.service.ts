import { Where, OrderBy } from "types";
import type { KnexRequest } from "../../lib/knex/knex-request";

export interface ClienteRecord {
  CdCliente: string;
  RzSocial: string;
  Cidade: string;
  Uf: string;
  CGC: string;
  CdVendedor: string;
  FgAtivo: string;
}

interface ClienteInput {
  CdCliente?: string;
  RzSocial: string;
  Cidade: string;
  Uf: string;
  CGC: string;
  CdVendedor: string;
  FgAtivo: string;
}

export default function ClienteService(client: KnexRequest) {
  const service = {
    schema: async () => {
      const response = {
        schemaCliente: {
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
              type: "String",
            },
            {
              field: "Cidade",
              label: "Cidade",
              type: "String",
            },
            {
              field: "Uf",
              label: "UF",
              type: "String",
            },
            {
              field: "CGC",
              label: "CNPJ",
              type: "String",
            },
            {
              field: "CdVendedor",
              label: "Cód Vendedor",
              type: "String",
            },
            {
              field: "vendedor",
              label: "Vendedor",
              type: "Vendedor",
            },
            {
              field: "FgAtivo",
              label: "Ativo",
              type: "String",
            },
          ],
        },
      };
      return response.schemaCliente;
    },

    list: async (where: Where[] = [], orderBy: OrderBy[] = []) => {
      const response = await client("plano", {
        from: "CadCli",
        where,
        orderBy,
      });
      return response;
    },

    read: async ([CdCliente]: string[]) => {
      const response = await client("plano", {
        from: "CadCli",
        where: [["CdCliente", "=", CdCliente]],
      });
      return response[0];
    },

    create: async (input: ClienteInput) => {
      const response = await client("plano", {
        from: "CadCli",
        insert: input,
      });
      return response;
    },

    update: async ([CdCliente]: string[], input: ClienteInput) => {
      const response = await client("plano", {
        from: "CadCli",
        where: [["CdCliente", "=", CdCliente]],
        update: input,
      });
      return response;
    },

    del: async ([CdCliente]: string[]) => {
      const response = await client("plano", {
        from: "CadCli",
        where: [["CdCliente", "=", CdCliente]],
        del: ["CdCliente"],
      });
      return response;
    },

    clear: () => {
      return {
        CdCliente: "",
        RzSocial: "",
        Cidade: "",
        Uf: "",
        CGC: "",
        CdVendedor: "",
        FgAtivo: "",
      };
    },
  };
  return service;
}
