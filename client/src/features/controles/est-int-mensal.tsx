import { useQuery } from "react-query";
import { Table } from "../../components/table";
import { esterilizacaoInternaService } from "../../service/esterilizacao-interna.service";

export function EsterilizacaoInternaMensal({
  mesInicial,
  mesCorrente,
  children,
  dispatch,
}: any) {
  const schema = useQuery(
    ["esterilizacaoInternaMensalSchema"],
    async () => esterilizacaoInternaService.schemaMensal(),
    { staleTime: Infinity }
  );

  const mensal = useQuery(
    ["esterilizacaoInternaMensal", mesInicial],
    ({ queryKey }) => {
      const [_key, mesInicial] = queryKey as [string, string];
      return esterilizacaoInternaService.mensal(mesInicial);
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
