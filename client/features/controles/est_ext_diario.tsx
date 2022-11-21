import { TEvent } from "../../../types";
import { Table } from "../../components/table/table";
import { day } from "../../lib/day";
import { esterilizacaoExternaService } from "../../service/esterilizacao-externa.service";

type EsterilizacaoExternaDiarioProp = {
  children: any;
  mesCorrente: string[];
  diaCorrente: string[];
  dispatch: any;
};

export function EsterilizacaoExternaDiario({
  children,
  mesCorrente,
  diaCorrente,
}: EsterilizacaoExternaDiarioProp) {
  const schema = useQuery(
    ["esterilizacaoExternaDiarioSchema"],
    async () => esterilizacaoExternaService.schemaDiario(),
    { staleTime: Infinity }
  );

  function handleWhere(event: TEvent) {
    setWhere(event.value);
    props.onWhere(event.value);
    props.showWhere(event.value);
  }
  function handleSelect(event: TEvent) {
    setSelected(event.value);
    props.showSelected(event.value);
  }

  function handleOrder(event: TEvent) {
    setOrderBy(event.value);
    props.showOrderBy(event.value);
  }

  const diario = useQuery(
    ["esterilizacaoExternaDiario", mesCorrente],
    ({ queryKey }) => {
      const [_key, [mesCorrente]] = queryKey as [string, string];
      if (mesCorrente === undefined) return [];
      return esterilizacaoExternaService.diario(
        day(mesCorrente + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  return (
    <Table
      data={diario.data || []}
      schema={schema.data}
      selected={diaCorrente}
      onOrderEvent={handleOrder}
      onSelectEvent={handleSelect}
      onWhereEvent={handleWhere}
    >
      {children}
    </Table>
  );
}
