import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { TEvent, TIds } from "../../../../types";
import { isEmpty } from "../../../../utils/identify/is_empty";
import { Table } from "../../../components/table/table";
import { operacaoService } from "../../../service/operacao.service";

type OperacaoProdutoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  produtoCorrente: { produto?: string };
  children?: ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoProduto({
  operacao,
  dia,
  children,
  produtoCorrente,
  onSelectEvent,
}: OperacaoProdutoProps) {
  const schema = useQuery({
    queryKey: ["operacaoProdutoSchema"],
    queryFn: async () => operacaoService.schemaProduto(),
    staleTime: Infinity,
  });

  const produto = useQuery({
    queryKey: ["operacaoProduto", operacao, dia],
    queryFn: ({ queryKey }) => {
      const [_key, operacao, dia] = queryKey as [string, TIds, TIds];
      if (isEmpty(operacao.operacao) || isEmpty(dia.dia)) return [];
      return operacaoService.produto(operacao.operacao, dia.dia);
    },
    staleTime: 1000 * 60 * 10, // 10 minutos
  });

  return (
    <Table
      name="produto"
      data={produto.data || []}
      schema={schema.data || []}
      selected={produtoCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
