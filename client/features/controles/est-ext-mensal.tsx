import { useQuery } from "@tanstack/react-query";
import { Dispatch } from "../../../types";
import { Table } from "../../components/table";
import { esterilizacaoExternaService } from "../../service/esterilizacao-externa.service";

type EsterilizacaoExternaMensalProp = {
  children: any;
  mesCorrente: string[];
  mesInicial: string;
  dispatch: Dispatch;
};

export function EsterilizacaoExternaMensal({
  mesInicial,
  mesCorrente,
  children,
  dispatch,
}: EsterilizacaoExternaMensalProp) {
  const schema = useQuery(
    ["esterilizacaoExternaMensalSchema"],
    async () => esterilizacaoExternaService.schemaMensal(),
    { staleTime: Infinity }
  );

  const mensal = useQuery(
    ["esterilizacaoExternaMensal", mesInicial],
    ({ queryKey }) => {
      const [_key, mesInicial] = queryKey as [string, string];
      return esterilizacaoExternaService.mensal(mesInicial);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  return (
    <Table
      data={mensal.data || []}
      schema={schema.data}
      dispatch={dispatch}
      selected={mesCorrente}
    >
      {children}
    </Table>
  );
}
