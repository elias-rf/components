import { formatMoney } from "@/utils/format/format-money";
import { zsr } from "@/utils/zod/z-refine";
import { zd, zod } from "@/utils/zod/zod";
import { TNfSaidaModel } from "../../nf-saida/nf-saida.type";
import { TPeriodoCliente, TVendaMensalResp } from "../cliente.type";

export function vendaMensalValorFactory({
  nfSaidaModel,
}: {
  nfSaidaModel: TNfSaidaModel;
}) {
  return async (args: TPeriodoCliente): Promise<TVendaMensalResp[]> => {
    zod(
      args,
      zd.object({
        inicio: zd.string().superRefine(zsr.date),
        fim: zd.string().superRefine(zsr.date),
        cliente: zd.number(),
      })
    );
    const data = await nfSaidaModel.query.vendaMensalCliente(args);
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
  };
}
