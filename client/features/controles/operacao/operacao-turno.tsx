import { Table } from "@/client/components/table";
import { TSelection } from "@/types";
import { trpc } from "@/utils/trpc/trpc";
import { operacaoTurnoSchema } from "./operacao-turno_schema";

type OperacaoTurnoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string }[];
  onSelection?: (event: TSelection) => void;
};

export function OperacaoTurno({
  operacao,
  dia,
  onSelection,
}: OperacaoTurnoProps) {
  const turno = trpc.ordemProducaoOperacao.turno.useQuery({
    operacao: operacao.operacao || "",
    data: dia[0].dia || "",
  });

  return (
    <Table
      rows={turno.data}
      columns={operacaoTurnoSchema}
      onSelection={onSelection}
    ></Table>
  );
}
