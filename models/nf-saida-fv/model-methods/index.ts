import { TConnection } from "../../../config/connections";
import { vendaAnalitico } from "./venda-analitico";
import { vendaAnaliticoSchema } from "./venda-analitico-schema";
import { vendaDiario } from "./venda-diario";
import { vendaDiarioSchema } from "./venda-diario-schema";
import { vendaMensalCliente } from "./venda-mensal-cliente";
import { vendaMensalClienteSchema } from "./venda-mensal-cliente-schema";

export function nfSaidaFvMethods({ connection }: { connection: TConnection }) {
  return {
    query: {
      vendaAnaliticoSchema: vendaAnaliticoSchema(),
      vendaAnalitico: vendaAnalitico({ connection }),
      vendaDiarioSchema: vendaDiarioSchema(),
      vendaDiario: vendaDiario({ connection }),
      vendaMensalClienteSchema: vendaMensalClienteSchema(),
      vendaMensalCliente: vendaMensalCliente({ connection }),
    },
    mutation: {},
  };
}
