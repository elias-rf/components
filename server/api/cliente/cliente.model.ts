import type { TConnections, TFieldClient } from "../../../types";
import { TClienteRpc } from "../../../types/cliente.type";
import { day } from "../../../utils/date/day";
import { formatMoney } from "../../../utils/format/format-money";
import { crudModel } from "../crud/crud.model";
import { nfSaidaModel } from "../nf-saida/nf-saida.model";

const table = "cliente";

export function clienteModel(connections: TConnections) {
  const crud = crudModel(connections);
  const nfSaida = nfSaidaModel(connections);
  const rsp: TClienteRpc = {
    query: {
      // SCHEMA
      async schema() {
        return crud.schema({ table });
      },

      // CLEAR
      async clear() {
        return crud.clear({ table });
      },

      // LIST
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },

      // READ
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },

      async vendaMensalQuantidadeSchema(args) {
        return getSchema(args);
      },

      async vendaMensalValorSchema(args: { inicio: string; fim: string }) {
        return getSchema(args);
      },

      async vendaMensalValorMedioSchema(args: { inicio: string; fim: string }) {
        return getSchema(args);
      },

      async vendaMensalQuantidade(args: {
        inicio: string;
        fim: string;
        cliente: number;
      }) {
        const data = await nfSaida.query.vendaMensalCliente(args);
        const rsp: any = {};
        data.forEach(
          ({
            anoMes,
            NmCategoria,
            quantidade,
          }: {
            anoMes: string;
            NmCategoria: string;
            quantidade: number;
            valor: number;
          }) => {
            rsp[NmCategoria] = rsp[NmCategoria] || {};
            rsp[NmCategoria][anoMes] = quantidade;
          }
        );
        const resp = [];
        for (const item in rsp) {
          resp.push({ categoria: item, ...rsp[item] });
        }
        return resp;
      },

      async vendaMensalValor(args: {
        inicio: string;
        fim: string;
        cliente: number;
      }) {
        const data = await nfSaida.query.vendaMensalCliente(args);
        const rsp: any = {};
        data.forEach(
          ({
            anoMes,
            NmCategoria,
            valor,
          }: {
            anoMes: string;
            NmCategoria: string;
            quantidade: number;
            valor: number;
          }) => {
            rsp[NmCategoria] = rsp[NmCategoria] || {};
            rsp[NmCategoria][anoMes] = formatMoney(valor, 0);
          }
        );
        const resp = [];
        for (const item in rsp) {
          resp.push({ categoria: item, ...rsp[item] });
        }
        return resp;
      },

      async vendaMensalValorMedio(args: {
        inicio: string;
        fim: string;
        cliente: number;
      }) {
        const data = await nfSaida.query.vendaMensalCliente(args);
        const rsp: any = {};
        data.forEach(
          ({
            anoMes,
            NmCategoria,
            valor,
            quantidade,
          }: {
            anoMes: string;
            NmCategoria: string;
            quantidade: number;
            valor: number;
          }) => {
            rsp[NmCategoria] = rsp[NmCategoria] || {};
            rsp[NmCategoria][anoMes] =
              quantidade > 0 ? formatMoney(valor / quantidade, 2) : "0,00";
          }
        );
        const resp = [];
        for (const item in rsp) {
          resp.push({ categoria: item, ...rsp[item] });
        }
        return resp;
      },
    },
    // mutation: {
    //   // CREATE
    //   async clienteCreate({ data }) {
    //     return crud.create({ table, data });
    //   },

    //   // UPDATE
    //   async clienteUpdate({ id, data }) {
    //     return crud.update({ table, id, data });
    //   },

    //   // DEL
    //   async Del({ id }) {
    //     return crud.del({ table, id });
    //   },
    // },
  };
  return rsp;
}

function getSchema({ inicio, fim }: { inicio: string; fim: string }) {
  const rsp: TFieldClient[] = [
    {
      name: "categoria",
      label: "Produto",
      primaryKey: true,
    },
  ];
  let dtInicio = day(inicio);
  const dtFim = day(fim).add(1, "month");
  while (dtInicio.format("YYYY-MM") !== dtFim.format("YYYY-MM")) {
    rsp.push({
      name: dtInicio.format("YYYY-MM"),
      type: "float",
      fieldClass: "text-right",
    });
    dtInicio = dtInicio.add(1, "month");
  }
  return rsp;
}
