import { Knex } from "knex";
import { TNfSaidaFvModel } from "../../nf-saida-fv/nf-saida-fv.type";
import { transferenciaDiario } from "./transferencia-diario";
import { transferenciaDiarioSchema } from "./transferencia-diario-schema";
import { transferenciaMensal } from "./transferencia-mensal";
import { transferenciaMensalSchema } from "./transferencia-mensal-schema";
import { transferenciaModelo } from "./transferencia-modelo";
import { transferenciaModeloSchema } from "./transferencia-modelo-schema";
import { vendaAnalitico } from "./venda-analitico";
import { vendaAnaliticoSchema } from "./venda-analitico-schema";
import { vendaDiario } from "./venda-diario";
import { vendaDiarioSchema } from "./venda-diario-schema";
import { vendaMensalCliente } from "./venda-mensal-cliente";
import { vendaMensalClienteSchema } from "./venda-mensal-cliente-schema";

export function nfSaidaMethods({
  connection,
  nfSaidaFvModel,
}: {
  connection: Knex;
  nfSaidaFvModel: TNfSaidaFvModel;
}) {
  return {
    query: {
      transferenciaDiarioSchema: transferenciaDiarioSchema(),
      transferenciaDiario: transferenciaDiario({ connection }),
      transferenciaMensalSchema: transferenciaMensalSchema(),
      transferenciaMensal: transferenciaMensal({ connection }),
      transferenciaModeloSchema: transferenciaModeloSchema(),
      transferenciaModelo: transferenciaModelo({ connection }),
      vendaAnaliticoSchema: vendaAnaliticoSchema(),
      vendaAnalitico: vendaAnalitico({ connection, nfSaidaFvModel }),
      vendaDiarioSchema: vendaDiarioSchema(),
      vendaDiario: vendaDiario({ connection }),
      vendaMensalClienteSchema: vendaMensalClienteSchema(),
      vendaMensalCliente: vendaMensalCliente({ connection }),
    },
    mutation: {},
  };
}
