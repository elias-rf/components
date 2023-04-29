import { trpc } from "@mono/utils/trpc/trpc";
import { Table } from "../../../components/table/table";
import { operacaoTurnoSchema } from "./operacao-turno.schema";

type OperacaoTurnoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  onSelect?: (event: any) => void;
};

export function OperacaoTurno({ operacao, dia, onSelect }: OperacaoTurnoProps) {
  const turno = trpc.ordemProducaoOperacao.turno.useQuery({
    operacao: operacao.operacao || "",
    data: dia.dia || "",
  });

  return (
    <Table
      data={turno.data}
      schema={operacaoTurnoSchema}
      onSelect={onSelect}
    ></Table>
  );
}
