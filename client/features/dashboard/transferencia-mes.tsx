import { useQuery } from "@tanstack/react-query";
import { PageTitle } from "../../components/page-title";
import { day } from "../../lib/day";
import { transferenciaService } from "../../service/transferencia.service";

function quantidadeProduto(data: any[] | undefined, prod: string) {
  if (!data) return 0;
  if (!data[0]) return 0;
  return data[0][prod] || 0;
}

export function TransferenciaMes() {
  const mesInicial = day().format("YYYY-MM");
  const mensal = useQuery(
    ["transferenciaMes", [mesInicial]],
    ({ queryKey }) => {
      const [_key, [mesInicial]] = queryKey as [string, string[]];
      return transferenciaService.mensal(mesInicial);
    },
    {
      staleTime: 1000 * 60 * 30, // 30 minutos
    }
  );

  return (
    <div className="w-fit">
      <PageTitle title={"Produção do Mês"} />
      <div className="flex">
        <div className="p-2 border border-gray-600 w-80">
          <div>LiteFlex</div>
          <div className="text-8xl">
            {quantidadeProduto(mensal.data, "LITEFLEX")}
          </div>
        </div>
        <div className="w-60">
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Hilite</div>
            <div className="items-end text-xl">
              {quantidadeProduto(mensal.data, "HILITE")}
            </div>
          </div>
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Enlite</div>
            <div className="text-xl">
              {quantidadeProduto(mensal.data, "ENLITE")}
            </div>
          </div>
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Metil</div>
            <div className="text-xl">
              {quantidadeProduto(mensal.data, "METILCELULOSE")}
            </div>
          </div>
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Corneal Ring</div>
            <div className="text-xl">
              {quantidadeProduto(mensal.data, "CORNEAL RING")}
            </div>
          </div>
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Anel Capsular</div>
            <div className="text-xl">
              {quantidadeProduto(mensal.data, "ANEL CAPSULAR")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
