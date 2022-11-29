import { useQuery } from "@tanstack/react-query";
import { TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { transferenciaService } from "../../../service/transferencia.service";

type TransferenciaModeloProps = {
  diaCorrente: { dia?: string };
  children?: React.ReactNode;
};

export function TransferenciaModelo({
  diaCorrente,
  children,
}: TransferenciaModeloProps) {
  const schema = useQuery({
    queryKey: ["transferenciaModeloSchema"],
    queryFn: async () => transferenciaService.schemaModelo(),
    staleTime: Infinity,
  });

  const modelo = useQuery({
    queryKey: ["transferenciaModelo", diaCorrente],
    queryFn: ({ queryKey }) => {
      const [_key, diaCorrente] = queryKey as [string, TIds];
      return transferenciaService.modelo(diaCorrente.dia);
    },
    staleTime: 1000 * 60 - 10, // 10 minutos
  });

  return (
    <Table name="modelo" data={modelo.data || []} schema={schema.data || []}>
      {children}
    </Table>
  );
}
