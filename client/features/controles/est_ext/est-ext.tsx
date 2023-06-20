import { TSelection } from "@/types";
import { day } from "@/utils/date/day";
import React from "react";
import { EsterilizacaoExternaDiario } from "./est-ext-diario";
import { EsterilizacaoExternaMensal } from "./est-ext-mensal";
import { EsterilizacaoExternaModelo } from "./est-ext-modelo";
import { EsterilizacaoExternaProduto } from "./est-ext-produto";

type EsterilizacaoExternaProp = {
  dia?: string;
  onState?: (event: any) => void;
};

export function EstExt({ onState, dia }: EsterilizacaoExternaProp) {
  const [mesCorrente, setMesCorrente] = React.useState<{ mes: string }[]>([]);
  const [diaCorrente, setDiaCorrente] = React.useState<{ dia: string }[]>([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState<
    { produto?: string }[]
  >([]);

  const mesInicial = { mes: day(dia).subtract(13, "month").format("YYYY-MM") };

  function handleOnChangeMensal(event: TSelection) {
    if (event[0].mes && event[0].mes === mesCorrente[0]?.mes) {
      return setMesCorrente([]);
    }
    setMesCorrente([{ mes: event[0].mes }]);
  }

  function handleOnChangeDiario(event: TSelection) {
    if (event[0].dia && event[0].dia === diaCorrente[0]?.dia) {
      return setDiaCorrente([]);
    }
    setDiaCorrente([{ dia: event[0].dia }]);
  }

  function handleOnChangeProduto(event: TSelection) {
    if (event[0].produto && event[0].produto === produtoCorrente[0]?.produto) {
      return setProdutoCorrente([]);
    }
    setProdutoCorrente([{ produto: event[0].produto }]);
  }

  React.useEffect(() => {
    onState && onState({ mesCorrente, diaCorrente, produtoCorrente });
  }, [onState, mesCorrente, diaCorrente, produtoCorrente]);

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <EsterilizacaoExternaMensal
          mesInicial={mesInicial}
          mesCorrente={mesCorrente}
          onSelection={handleOnChangeMensal}
        >
          <EsterilizacaoExternaDiario
            mesCorrente={mesCorrente}
            diaCorrente={diaCorrente}
            onSelection={handleOnChangeDiario}
          >
            <EsterilizacaoExternaProduto
              diaCorrente={diaCorrente}
              produtoCorrente={produtoCorrente}
              onSelection={handleOnChangeProduto}
            >
              <EsterilizacaoExternaModelo
                diaCorrente={diaCorrente}
                produtoCorrente={produtoCorrente}
              ></EsterilizacaoExternaModelo>
            </EsterilizacaoExternaProduto>
          </EsterilizacaoExternaDiario>
        </EsterilizacaoExternaMensal>
      </div>
    </div>
  );
}
