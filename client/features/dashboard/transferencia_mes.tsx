import React from "react";
import { PageTitle } from "../../components/page/page_title";
import { day } from "../../lib/day";
import { transferenciaService } from "../../service/transferencia.service";

function quantidadeProduto(data: any[] | undefined, prod: string) {
  if (!data) return 0;
  if (!data[0]) return 0;
  return data[0][prod] || 0;
}

export function TransferenciaMes() {
  const [mensal, setMensal] = React.useState<any[]>([]);
  const mesInicial = day().format("YYYY-MM");

  React.useEffect(() => {
    async function getMensal() {
      const rsp = await transferenciaService.mensal(mesInicial);
      setMensal(rsp);
    }
    getMensal();
  }, [mesInicial]);

  return (
    <div className="w-fit">
      <PageTitle title={"Produção do Mês"} />
      <div className="flex">
        <div className="p-2 border border-gray-600 w-80">
          <div>LiteFlex</div>
          <div className="text-8xl">
            {quantidadeProduto(mensal, "LITEFLEX")}
          </div>
        </div>
        <div className="w-60">
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Hilite</div>
            <div className="items-end text-xl">
              {quantidadeProduto(mensal, "HILITE")}
            </div>
          </div>
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Enlite</div>
            <div className="text-xl">{quantidadeProduto(mensal, "ENLITE")}</div>
          </div>
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Metil</div>
            <div className="text-xl">
              {quantidadeProduto(mensal, "METILCELULOSE")}
            </div>
          </div>
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Corneal Ring</div>
            <div className="text-xl">
              {quantidadeProduto(mensal, "CORNEAL RING")}
            </div>
          </div>
          <div className="flex justify-between p-2 border border-gray-600 flex-nowrap">
            <div className="w-28">Anel Capsular</div>
            <div className="text-xl">
              {quantidadeProduto(mensal, "ANEL CAPSULAR")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
