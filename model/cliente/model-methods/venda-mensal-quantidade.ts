import { z, zod } from "../../../utils/zod/z";
import { zsr } from "../../../utils/zod/z-refine";
import { TNfSaidaModel } from "../../nf-saida/nf-saida.type";
import { TPeriodoCliente, TVendaMensalResp } from "../cliente.type";

export function vendaMensalQuantidadeFactory({
  nfSaidaModel,
}: {
  nfSaidaModel: TNfSaidaModel;
}) {
  return async (args: TPeriodoCliente): Promise<TVendaMensalResp[]> => {
    zod(
      args,
      z.object({
        inicio: z.string().superRefine(zsr.date),
        fim: z.string().superRefine(zsr.date),
        cliente: z.number(),
      })
    );
    const data = await nfSaidaModel.query.vendaMensalCliente(args);
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
  };
}
