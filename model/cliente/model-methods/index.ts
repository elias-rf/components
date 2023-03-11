import { TNfSaidaModel } from "../../nf-saida/nf-saida.type";
import { TClienteModel } from "../cliente.type";
import { vendaMensalQuantidadeFactory } from "./venda-mensal-quantidade";
import { vendaMensalQuantidadeSchema } from "./venda-mensal-quantidade-schema";
import { vendaMensalValorFactory } from "./venda-mensal-valor";
import { vendaMensalValorMedioFactory } from "./venda-mensal-valor-medio";
import { vendaMensalValorMedioSchema } from "./venda-mensal-valor-medio-schema";
import { vendaMensalValorSchema } from "./venda-mensal-valor-schema";

export function clienteMethods(args: { nfSaidaModel: TNfSaidaModel }) {
  return {
    query: {
      vendaMensalQuantidadeSchema,
      vendaMensalValorSchema,
      vendaMensalValorMedioSchema,
      vendaMensalQuantidade: vendaMensalQuantidadeFactory(args),
      vendaMensalValor: vendaMensalValorFactory(args),
      vendaMensalValorMedio: vendaMensalValorMedioFactory(args),
    },
  } as TClienteModel;
}
