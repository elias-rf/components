import { Connections } from "dal/connections";
import type { CurrentUser, GenericObject, ListArgs } from "../..";
import { Id } from "../../../index";
import knexOrder from "../lib/knex/knex-order";
import knexWhere from "../lib/knex/knex-where";

type Record = {
  CdCliente?: string;
  RzSocial?: string;
  Cidade?: string;
  Uf?: string;
  CGC?: string;
  CdVendedor?: string;
  FgAtivo?: string;
};

export default function ClienteRpc(connection: Connections) {
  const knexPlano = connection.plano;
  const table = "CadCli";
  const pk = ["CdCliente"];
  const select = [
    "CdCliente",
    "RzSocial",
    "Cidade",
    "Uf",
    "CGC",
    "CdVendedor",
    "FgAtivo",
  ];
  return {
    async schema() {
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
    },
    async list(
      { where, orderBy, limit = 50 }: ListArgs,
      { currentUser }: { currentUser?: CurrentUser }
    ): Promise<GenericObject[]> {
      const qry = await knexPlano(table)
        .select(select)
        .limit(limit)
        .where(knexWhere(where))
        .orderBy(knexOrder(orderBy));
      return qry;
    },

    async read(
      { id }: { id: Id },
      { currentUser }: { currentUser?: CurrentUser }
    ): Promise<GenericObject> {
      if (!id || !id.length || !Array.isArray(id)) {
        throw new Error("[CdCliente] is required");
      }
      const qry = await knexPlano(table)
        .select(select)
        .where("CdCliente", id[0]);
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    async del(
      { id }: { id: Id },
      { currentUser }: { currentUser?: CurrentUser }
    ): Promise<number> {
      if (!id || !id.length || !Array.isArray(id)) {
        throw new Error("[CdCliente] is required");
      }
      const qry = await knexPlano(table).del().where("CdCliente", id[0]);
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    async create(
      { rec }: { rec: Record },
      { currentUser }: { currentUser?: CurrentUser }
    ): Promise<string[]> {
      const qry = await knexPlano(table).insert(rec).returning(["CdCliente"]);
      return qry;
    },

    async update(
      {
        id,
        rec,
      }: {
        id: Id;
        rec: Record;
      },
      { currentUser }: { currentUser?: CurrentUser }
    ): Promise<any> {
      if (!id || !id.length || !Array.isArray(id)) {
        throw new Error("[CdCliente] is required");
      }
      const qry = await knexPlano(table)
        .update(rec)
        .where("CdCliente", id[0])
        .returning(["CdCliente"]);
      return qry;
    },
  };
}
