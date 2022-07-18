import { useQuery } from "react-query";
import { Table } from "../../components";
import { esterilizacaoExternaService } from "../../service/esterilizacao-externa.service";

export function EsterilizacaoExternaMensal({
  mesInicial,
  mesCorrente,
  children,
  dispatch,
}: any) {
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
