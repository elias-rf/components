import React from "react";
import { nfSaidaStore } from "../../../model/nf-saida/nf-saida.store";
import { day } from "../../../utils/date/day";
import { PageTitle } from "../../components/page/page_title";

function quantidadeProduto(data: any[] | undefined, prod: string) {
  if (!data) return 0;
  if (!data[0]) return 0;
  return data[0][prod] || 0;
}

export function TransferenciaMes() {
  const [dataTransferenciaMensal, getTransferenciaMensal] = nfSaidaStore(
    (state) => [state.dataTransferenciaMensal, state.getTransferenciaMensal]
  );

  // const [dataTransferenciaMensalSchema, getTransferenciaMensalSchema] =
  //   nfSaidaStore((state) => [
  //     state.dataTransferenciaMensalSchema,
  //     state.getTransferenciaMensalSchema,
  //   ]);

  const mesInicial = day().format("YYYY-MM");

  React.useEffect(() => {
    getTransferenciaMensal({ mes: mesInicial });
  }, [mesInicial]);

  return (
    <div className={"w-fit"}>
      <PageTitle title={"Produção do Mês"} />
      <div className={"flex"}>
        <div className={"p-2 border border-gray-600 w-80"}>
          <div>LiteFlex</div>
          <div className={"text-8xl"}>
            {quantidadeProduto(dataTransferenciaMensal, "LITEFLEX")}
          </div>
        </div>
        <div className={"w-60"}>
          <div
            className={
              "flex justify-between p-2 border border-gray-600 flex-nowrap"
            }
          >
            <div className={"w-28"}>Hilite</div>
            <div className={"items-end text-xl"}>
              {quantidadeProduto(dataTransferenciaMensal, "HILITE")}
            </div>
          </div>
          <div
            className={
              "flex justify-between p-2 border border-gray-600 flex-nowrap"
            }
          >
            <div className={"w-28"}>Enlite</div>
            <div className={"text-xl"}>
              {quantidadeProduto(dataTransferenciaMensal, "ENLITE")}
            </div>
          </div>
          <div
            className={
              "flex justify-between p-2 border border-gray-600 flex-nowrap"
            }
          >
            <div className={"w-28"}>Metil</div>
            <div className={"text-xl"}>
              {quantidadeProduto(dataTransferenciaMensal, "METILCELULOSE")}
            </div>
          </div>
          <div
            className={
              "flex justify-between p-2 border border-gray-600 flex-nowrap"
            }
          >
            <div className={"w-28"}>Corneal Ring</div>
            <div className={"text-xl"}>
              {quantidadeProduto(dataTransferenciaMensal, "CORNEAL RING")}
            </div>
          </div>
          <div
            className={
              "flex justify-between p-2 border border-gray-600 flex-nowrap"
            }
          >
            <div className={"w-28"}>Anel Capsular</div>
            <div className={"text-xl"}>
              {quantidadeProduto(dataTransferenciaMensal, "ANEL CAPSULAR")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
