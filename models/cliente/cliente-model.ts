import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { formatMoney } from "@/utils/format/format-money";
import { zsr } from "@/utils/zod/z-refine";
import { zd, zod } from "@/utils/zod/zod";
import { cliente } from "./cliente.table";
import { TPeriodoCliente, TVendaMensalResp } from "./cliente.type";

export class ClienteModel extends CrudModel {
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[cliente.database], cliente);
    this.models = models;
    models.cliente = this;
  }

  async vendaMensalQuantidade(
    args: TPeriodoCliente
  ): Promise<TVendaMensalResp[]> {
    zod(
      args,
      zd.object({
        inicio: zd.string().superRefine(zsr.date),
        fim: zd.string().superRefine(zsr.date),
        cliente: zd.number(),
      })
    );
    const data = await this.models.nfSaida.vendaMensalCliente(args);
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
  }

  async vendaMensalValorMedio(
    args: TPeriodoCliente
  ): Promise<TVendaMensalResp[]> {
    zod(
      args,
      zd.object({
        inicio: zd.string().superRefine(zsr.date),
        fim: zd.string().superRefine(zsr.date),
        cliente: zd.number(),
      })
    );
    const data = await this.models.nfSaida.vendaMensalCliente(args);
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
  }

  async vendaMensalValor(args: TPeriodoCliente): Promise<TVendaMensalResp[]> {
    zod(
      args,
      zd.object({
        inicio: zd.string().superRefine(zsr.date),
        fim: zd.string().superRefine(zsr.date),
        cliente: zd.number(),
      })
    );
    const data = await this.models.nfSaida.vendaMensalCliente(args);
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
  }
}
