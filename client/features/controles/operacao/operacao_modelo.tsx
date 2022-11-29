import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { isEmpty } from "../../../../utils/identify/is_empty";
import { Table } from "../../../components/table/table";
import { operacaoService } from "../../../service/operacao.service";

type OperacaoModelProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  produto: { produto?: string };
  children?: React.ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoModelo({ operacao, dia, produto }: OperacaoModelProps) {
  const schema = useQuery({
    queryKey: ["operacaoModeloSchema"],
    queryFn: async () => operacaoService.schemaModelo(),
    staleTime: Infinity,
  });

  const modelo = useQuery({
    queryKey: ["operacaoModelo", operacao, dia, produto],
    queryFn: ({ queryKey }) => {
      const [_key, operacao, dia, produto] = queryKey as [
        string,
        TIds,
        TIds,
        TIds
      ];
      if (
        isEmpty(operacao.operacao) ||
        isEmpty(dia.dia) ||
        isEmpty(produto.produto)
      ) {
        return [];
      }
      return operacaoService.modelo(
        operacao.operacao,
        dia.dia,
        produto.produto
      );
    },
    staleTime: 1000 * 60 * 10, // 10 minutos
  });

  return (
    <Table
      name="modelo"
      data={modelo.data || []}
      schema={schema.data || []}
    ></Table>
  );
}
