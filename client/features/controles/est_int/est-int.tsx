import { day } from "@mono/utils/date/day";
import React from "react";
import { EsterilizacaoInternaDiario } from "./est-int-diario";
import { EsterilizacaoInternaMensal } from "./est-int-mensal";
import { EsterilizacaoInternaModelo } from "./est-int-modelo";
import { EsterilizacaoInternaProduto } from "./est-int-produto";

type EsterilizacaoInternaProp = {
  dia?: string;
};

export function EstInt({ dia }: EsterilizacaoInternaProp) {
  const [mesCorrente, setMesCorrente] = React.useState({});
  const [diaCorrente, setDiaCorrente] = React.useState({});
  const [produtoCorrente, setProdutoCorrente] = React.useState({});

  const mesInicial = { mes: day(dia).subtract(13, "month").format("YYYY-MM") };

  function handleOnChange(event: any) {
    if (event.name === "mensal") setMesCorrente(event.value);
    if (event.name === "diario") setDiaCorrente(event.value);
    if (event.name === "produto") setProdutoCorrente(event.value);
  }

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <EsterilizacaoInternaMensal
          mesInicial={mesInicial}
          mesCorrente={mesCorrente}
          onSelect={handleOnChange}
        >
          <EsterilizacaoInternaDiario
            mesCorrente={mesCorrente}
            diaCorrente={diaCorrente}
            onSelect={handleOnChange}
          >
            <EsterilizacaoInternaProduto
              diaCorrente={diaCorrente}
              produtoCorrente={produtoCorrente}
              onSelect={handleOnChange}
            >
              <EsterilizacaoInternaModelo
                diaCorrente={diaCorrente}
                produtoCorrente={produtoCorrente}
                onSelect={handleOnChange}
              ></EsterilizacaoInternaModelo>
            </EsterilizacaoInternaProduto>
          </EsterilizacaoInternaDiario>
        </EsterilizacaoInternaMensal>
      </div>
    </div>
  );
}
