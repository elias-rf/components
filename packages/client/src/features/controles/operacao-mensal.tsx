import { useQuery } from "react-query";
import { Table } from "../../components";
import { operacaoService } from "../../service/operacao.service";

export function OperacaoMensal({
  operacao,
  mesInicial,
  mesCorrente,
  children,
  dispatch,
}: any) {
  const schema = useQuery(
    ["operacaoMensalSchema"],
    async () => operacaoService.schemaMensal(),
    { staleTime: Infinity }
  );

  const mensal = useQuery(
    ["operacaoMensal", [operacao, mesInicial]],
    ({ queryKey }) => {
      const [_key, [operacao, mesInicial]] = queryKey as [string, string[]];
      return operacaoService.mensal(operacao, mesInicial);
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
